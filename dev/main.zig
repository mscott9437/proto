const std = @import("std");

pub fn main() void {
   const allocator = std.heap.page_allocator;

   var list = std.ArrayList(u32).init(allocator);
   defer list.deinit();

   std.debug.print("Hello, world!\n", .{});
}
