const std = @import("std");
const print = std.debug.print;

const Server = struct {
   stream_server: std.net.StreamServer,

   pub fn init() !Server {
      const address = std.net.Address.initIp4([4]u8{ 127, 0, 0, 1 }, 3000);

      var server = std.net.StreamServer.init(.{ .reuse_address = true });
      try server.listen(address);

      return Server{ .stream_server = server };
   }

   pub fn deinit(self: *Server) void {
      self.stream_server.deinit();
   }

   pub fn accept(self: *Server) !void {
      const conn = try self.stream_server.accept();
      defer conn.stream.close();

      var buf: [1000]u8 = undefined;
      const msg_size = try conn.stream.read(buf[0..]);

      print("{s}\n", .{ buf[0..msg_size] });

      _ = try conn.stream.write("okay");
      print("//EOF\n", .{  });
   }
};

pub fn main() !void {
   var server = try Server.init();
   defer server.deinit();

   print("localhost:{d}\n", .{ 3000 });

   while (true) {
      try server.accept();
   }
}
