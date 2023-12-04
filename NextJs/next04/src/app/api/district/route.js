import district from "@/data/quan_huyen.json";
export function GET(request) {
  const provinceId = request.nextUrl.searchParams.get("province_id");
  if (!provinceId) {
    return Response.json({ error: "Error" });
  }
  let data = Object.values(district);
  data = data
    .filter((item) => {
      return provinceId === item.parent_code;
    })
    .sort((a, b) => a.code - b.code);
  return Response.json(data);
}
