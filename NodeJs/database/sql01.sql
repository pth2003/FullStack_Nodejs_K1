-- comment trong sql 
-- 4. 
select * from users

-- 1.them du lieu vao table

insert into users(id,name,email,password,status,created_at,updated_at)
values (1,'user 1','abc@gmail.com','123456', true, now() , now()),
		(2,'user 2','user2@gmail.com','123456', true, now() , now()),
		(3,'user 3','user3@gmail.com','123456', true, now() , now()),
		(4,'user 4','user4@gmail.com','123456', true, now() , now())

-- 2. cap nhat du lieu
update users set name='user 22' , email='assd@gmail.com', updated_at=now() where id=2

-- 3. xoa du lieu
delete from users where id=1


-- hien thi du lieu 
UPDATE users set updated_at=NULL where id = 1
SELECT * from users where updated_at is not NULL

SELECT * from users where email like '%user%'