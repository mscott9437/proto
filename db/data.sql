create table users([id] text not null primary key, [name] varchar(32) not null, [pass] varchar(32) not null, [json] text not null, [rand] blob not null, [flag] int null);
create table player1([id] text not null, [name] varchar(32) not null, [flag] int null, foreign key(id) references users(id));
create table player2([id] text not null, [name] varchar(32) not null, [flag] int null, foreign key(id) references users(id));
create table player3([id] text not null, [name] varchar(32) not null, [flag] int null, foreign key(id) references users(id));
insert into users(id, name, pass, json, rand, flag) values(1111, 'player1', 'asdf', '{"friends": ["player2", "player3"]}', '11.11', null);
insert into users(id, name, pass, json, rand, flag) values(2222, 'player2', 'qwer', '{"friends": ["player1", "player3"]}', '22.22', null);
insert into users(id, name, pass, json, rand, flag) values(3333, 'player3', 'zxcv', '{"friends": ["player1", "player2"]}', '33.33', null);
insert into player1(id, name, flag) values(2222, 'player2', null);
insert into player1(id, name, flag) values(3333, 'player3', null);
insert into player2(id, name, flag) values(1111, 'player1', null);
insert into player2(id, name, flag) values(3333, 'player3', null);
insert into player3(id, name, flag) values(1111, 'player1', null);
insert into player3(id, name, flag) values(2222, 'player2', null);
