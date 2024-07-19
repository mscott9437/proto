#include <cassert>
#include "leveldb/db.h"

int main(int argc, char** argv) {

	leveldb::DB* db;

	leveldb::Options options;

	options.create_if_missing = true;

	options.error_if_exists = true;

	leveldb::Status status = leveldb::DB::Open(options, "/srv/db/realmodellc.com", &db);

	assert(status.ok());

	delete db;

}
