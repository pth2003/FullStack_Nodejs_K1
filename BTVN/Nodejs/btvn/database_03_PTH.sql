CREATE TABLE "PHONG" (
  "MaPhong" varchar(50) PRIMARY KEY,
  "LoaiPhong" varchar(50) NOT NULL,
  "SoKhachToiDa" int,
  "GiaPhong" INT,
  "MoTa" text
);

CREATE TABLE "KHACH_HANG" (
  "MaKH" varchar(50) PRIMARY KEY,
  "TenKH" varchar(200) NOT NULL,
  "DiaChi" varchar(200),
  "SoDT" int
);

CREATE TABLE "DAT_PHONG" (
  "MaDatPhong" varchar(50) PRIMARY KEY,
  "MaPhong" varchar(50),
  "MaKH" varchar(50),
  "NgayDat" date,
  "GioBatDau" time,
  "GioKetThuc" time,
  "TienDatCoc" int,
  "GhiChu" varchar(255),
  "TrangThaiDat" varchar(10)
);


CREATE TABLE "DICH_VU_DI_KEM" (
  "MaDV" varchar(50) PRIMARY KEY,
  "TenDV" varchar(100),
  "DonViTinh" varchar(10),
  "DonGia" int
);

CREATE TABLE "CHI_TIET_SU_DUNG_DV" (
  "MaDatPhong" varchar(50),
  "MaDV" varchar(50),
  "SoLuong" int,
  PRIMARY KEY ("MaDatPhong", "MaDV")
);

drop table "CHI_TIET_SU_DUNG_DV";
drop table "DICH_VU_DI_KEM";

drop table "DAT_PHONG";
ALTER TABLE "DAT_PHONG" ADD FOREIGN KEY ("MaPhong") REFERENCES "PHONG" ("MaPhong");

ALTER TABLE "DAT_PHONG" ADD FOREIGN KEY ("MaKH") REFERENCES "KHACH_HANG" ("MaKH");

ALTER TABLE "CHI_TIET_SU_DUNG_DV" ADD FOREIGN KEY ("MaDatPhong") REFERENCES "DAT_PHONG" ("MaDatPhong");

ALTER TABLE "CHI_TIET_SU_DUNG_DV" ADD FOREIGN KEY ("MaDV") REFERENCES "DICH_VU_DI_KEM" ("MaDV");


insert into "PHONG"("MaPhong","LoaiPhong","SoKhachToiDa","GiaPhong")
values ('P0002','Loại 1',25,80000),
		('P0003','Loại 2',15,50000),
		('P0004','Loại 3',20,80000);

insert into "KHACH_HANG"("MaKH","TenKH","DiaChi","SoDT")
values ('KH0001','Nguyen Van A' , 'Hoa Xuan',11111111),
		('KH0002','Nguyen Van B' , 'Hoa Hai',11111112),
		('KH0003','Phan Van A' , 'Cam Le',11111113),
		('KH0004','Phan Van B' , 'Hoa Xuan',11111114);

insert into "DICH_VU_DI_KEM"("MaDV","TenDV","DonViTinh","DonGia") 
values ('DV001','Beer','lon',10000),
		('DV002','Nuoc Ngot','lon',8000),
		('DV003','Trai Cay','dia',35000),
		('DV004','Khan uot','cai',2000);

insert into "DAT_PHONG"("MaDatPhong","MaPhong","MaKH","NgayDat","GioBatDau","GioKetThuc","TienDatCoc","GhiChu","TrangThaiDat")
values ('DP0001','P0001','KH0002','2018/03/26','11:00','13:30',100000,NULL,'Da Dat'),
		('DP0002','P0001','KH0003','2018/03/27','17:15','19:15',50000,NULL,'Da Huy'),
		('DP0003','P0002','KH0002','2018/03/26','20:00','22:15',100000,NULL,'Da Dat'),
		('DP0004','P0003','KH0001','2018/04/01','19:30','21:15',200000,NULL,'Da Dat')
insert into "CHI_TIET_SU_DUNG_DV"("MaDatPhong","MaDV","SoLuong") 
values ('DP0001','DV001',20),
		('DP0001','DV003',3),
		('DP0001','DV002',10),
		('DP0002','DV002',10),
		('DP0002','DV003',1),
		('DP0003','DV003',2),
		('DP0003','DV004',10);

-- CAU 1: 
select "DAT_PHONG"."MaDatPhong","DAT_PHONG"."MaPhong","LoaiPhong","GiaPhong","KHACH_HANG"."TenKH","NgayDat",
		("GiaPhong"* (EXTRACT(HOUR FROM "GioKetThuc") - EXTRACT(HOUR FROM "GioBatDau")) ) as "TongTienHat",
		sum("SoLuong" * "DonGia") as TongTienSuDungDichVu, 
		(("GiaPhong"* (EXTRACT(HOUR FROM "GioKetThuc") - EXTRACT(HOUR FROM "GioBatDau")) ) + sum("SoLuong" * "DonGia")) as TongTienThanhToan
from "DAT_PHONG"
inner join "PHONG"
on "DAT_PHONG"."MaPhong" = "PHONG"."MaPhong"
inner join "KHACH_HANG"
on "DAT_PHONG"."MaKH" = "KHACH_HANG"."MaKH"
left join "CHI_TIET_SU_DUNG_DV"
on "DAT_PHONG"."MaDatPhong" = "CHI_TIET_SU_DUNG_DV"."MaDatPhong"
full join "DICH_VU_DI_KEM" 
on "CHI_TIET_SU_DUNG_DV"."MaDV" = "DICH_VU_DI_KEM"."MaDV"
group by "DAT_PHONG"."MaDatPhong","LoaiPhong","GiaPhong","KHACH_HANG"."MaKH"
	
-- Cau 2 : 
select *
from "KHACH_HANG"
where "DiaChi" like '%Hoa Xuan%'

-- Câu 3: Hiển thị MaPhong, LoaiPhong, SoKhachToiDa, GiaPhong, SoLanDat của những phòng được khách hàng đặt
-- có số lần đặt lớn hơn 2 lần và trạng thái đặt là “Da dat”
select "PHONG".*, count("PHONG"."MaPhong") 
from "PHONG"
left join "DAT_PHONG"
ON "PHONG"."MaPhong" = "DAT_PHONG"."MaPhong"
where "DAT_PHONG"."TrangThaiDat" = 'Da Dat'
group by "PHONG"."MaPhong"
having  count("PHONG"."MaPhong") > 2