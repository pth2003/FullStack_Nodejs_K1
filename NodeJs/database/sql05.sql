-- ham tong hop : count, sum , avg , max, min 
-- di kem menh de group by, having 
select  status,count(id) 
from users
group by status
having count(id) >= 2
-- cau 1 : truy van tra ve danh sach user va so bai post cua tung user


select users.*, count(posts.id) as post 
from users
left join posts
on users.id = posts.user_id
group by users.id
having count(posts.id) = (
-- 	max(posts.user_id)
	
	select max(post_count)
	from (
		-- bang tam 
		select count(id) as post_count from posts group by user_id
	)
)
fetch first 1 rows only
;

select max(user_id) from posts
 
-- select *, (select count(id) from posts where users.id = posts.user_id) as post_count
-- from users

-- cau 2: tra ve thong tin user co tong so bai post lon hon 2
-- cau 3: tra ve thong tin user co tong so bai viet lon nhat






