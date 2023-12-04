import province from "@/data/tinh_tp.json";
export function GET() {
  const data = Object.values(province);
  // const code = data.map((item) => {
  //   return item.code;
  // });
  data.sort((a, b) => a.code - b.code);
  return Response.json({
    status: "success",
    data,
  });
}
