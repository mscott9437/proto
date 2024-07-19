#include "SDL.h"
#include "SDL_ttf.h"

struct grid_cell
{
	int c;
	SDL_Color *fg;
	SDL_Color *bg;
};

int main(int argc, char *argv[])
{
	int grid_w = 45;
	int grid_h = 20;

	int grid_size = grid_w * grid_h;

	struct grid_cell *grid = calloc((size_t)grid_size, sizeof(struct grid_cell));

	SDL_Init(SDL_INIT_VIDEO);

	SDL_Window *window;
	SDL_Renderer *renderer;

	TTF_Init();

	TTF_Font *font = TTF_OpenFont("assets/CascadiaMono.ttf", 25);

	int cell_w;
	int cell_h;

	TTF_SizeUTF8(font, "@", &cell_w, &cell_h);

	const int WIDTH = grid_w * cell_w;
	const int HEIGHT = grid_h * cell_h;

	window = SDL_CreateWindow("Cataclyst", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, WIDTH, HEIGHT, SDL_WINDOW_SHOWN);
	renderer = SDL_CreateRenderer(window, -1, SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);

	TTF_SetFontStyle(font, TTF_STYLE_NORMAL); // STYLE_NORMAL | STYLE_BOLD | STYLE_ITALIC | STYLE_UNDERLINE | STYLE_STRIKETHROUGH
	TTF_SetFontOutline(font, 0); // 0, 1, 2, etc..
	TTF_SetFontKerning(font, 1); // 1, 0
	TTF_SetFontHinting(font, TTF_HINTING_NORMAL); // NORMAL, LIGHT, MONO, NONE, LIGHT_SUBPIXEL

	int glyph = 64;

	//SDL_Color bg = {22, 22, 22, 255};
	SDL_Color bg = {0, 0, 0, 255};
	SDL_Color fg = {200, 200, 200, 255}; // {99, 99, 99, 255}

	for (int x = 0; x < grid_w; x++)
	{
		for (int y = 0; y < grid_h; y++)
		{
			struct grid_cell *cell = &grid[x + grid_w * y];

			cell->bg = &bg;
			cell->c = glyph;
			cell->fg = &fg;
	}}

	SDL_SetRenderDrawColor(renderer, bg.r, bg.g, bg.b, bg.a);
	SDL_RenderClear(renderer);

	SDL_Rect dest = { .x = 0, .y = 0, .w = cell_w, .h = cell_h };
	
	for (int x = 0; x < grid_w; x++)
	{
		for (int y = 0; y < grid_h; y++)
		{
			dest.x = cell_w * x;
			dest.y = cell_h * y;

			struct grid_cell *cell = &grid[x + grid_w * y];

			SDL_Surface *surface = TTF_RenderGlyph32_Shaded(font, (Uint16)cell->c, *cell->fg, *cell->bg);
			SDL_Texture *texture = SDL_CreateTextureFromSurface(renderer, surface);

			SDL_SetRenderDrawColor(renderer, cell->bg->r, cell->bg->g, cell->bg->b, cell->bg->a);

			SDL_RenderFillRect(renderer, &dest);
			SDL_RenderCopy(renderer, texture, NULL, &dest);

			SDL_DestroyTexture(texture);
			SDL_FreeSurface(surface);
	}}

	SDL_RenderPresent(renderer);

	SDL_bool done = SDL_FALSE;

	while (!done)
	{
		SDL_Event event;
		while (SDL_PollEvent(&event))
		{
			switch (event.type)
			{
			case SDL_QUIT:
				done = SDL_TRUE;
				break;
			}
	}}

	free(grid);

	TTF_CloseFont(font);
	TTF_Quit();

	SDL_DestroyRenderer(renderer);
	SDL_DestroyWindow(window);

	SDL_Quit();

	return 0;
}