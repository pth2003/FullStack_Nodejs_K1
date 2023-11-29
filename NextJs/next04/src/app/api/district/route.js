import district from "@/data/quan_huyen.json";
export function GET(request) {
  const provinceId = request.nextUrl.searchParams.get("province_id");
  if (!provinceId) {
    return Response.json({ error: "Error" });
  }
  let districtArr = Object.values(district);
  districtArr = districtArr.filter((item) => {
    return provinceId === item.parent_code;
  });
  return Response.json(districtArr);
}
