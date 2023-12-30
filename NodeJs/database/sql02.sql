-- rang buoc 
select * from users
insert into users(name,email,password)
VALUES	('user 1','user1@gmail.com','1234567'),
		('user 2','user2@gmail.com','1234567'),
		('user 3','user3@gmail.com','1234567');
delete from users

-- auto increment 
 select * from groups 
 insert into groups(name)
 values ('group 1'),('group 2')
 
 
 -- join bang
 select users.*, groups.name as group_name from users
inner join "groups" 
 on users.group_id = "groups".id
 
 -- cau 1: viet cau lenh truy van lay ra danh sach users vaf ten groups theo dieu kien sau :
 -- ten groups co chua tu khoa admin 
select users.*, groups.name as group_name from users
inner join "groups" 
 on users.group_id = "groups".id 
 where lower(groups.name) LIKE '%admin%'
 