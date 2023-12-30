-- cau 1 : lay danh sach khoa hoc ma user có id = 1 da mua
-- yeu cầu: trả về thông tin khóa học, tên và email của user
-- cau 2 : sap xep ket qua theo gia giam dan va id tang dan
-- cau 3 : them 1 cot bang cau lenh truy van 
-- dieu kien : gia >= 200000 thi discount = 10% 
-- cau 4 : them 1 cot sale_price : tinh ra gia can thanh toan sau khi tru discount
-- cau 5 : tra ve khoa hoc co gia lon nhat => limit : tra ve ban ghi gioi han
-- cau 6: tra ve khoa hoc co gia lon thu 2 =>  offset
-- chuyen so trang thanh offset =  (page - 1) * limit; 
-- 
select courses.*, users.name as user_name, users.email as user_email, CASE
	when courses.price >= 200000 then '10%'
	else '0'
end as discount, 
(courses.price - courses.price *(CASE
	when courses.price >= 200000 then 10
	else 0
end)/100) as sale_price
from user_courses
inner join users
on  user_id = users.id 
inner join courses
on course_id = courses.id
where user_id = 2
ORDER by courses.price desc, courses.id asc
LIMIT 1
OFFSET 1;





