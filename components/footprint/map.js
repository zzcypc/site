import loadMap from "../../utils/amap";
import { useEffect } from "react";

export default function Map() {
  useEffect(() => {
    loadMap()
      .then((AMap) => {
        const map = new AMap.Map("container");
      })
      .catch((e) => {
        console.error(e); //加载错误提示
      });
  }, []);
  return (
    <div id="container" style={{ height: "100%" }}>
      map
    </div>
  );
}
