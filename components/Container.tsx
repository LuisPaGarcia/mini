import Img from "next/image";
import LilDude from "./LilDude";
export default function Container() {
  return (
    <section className="flex flex-wrap justify-center">
      <div className="w-1/2 pb-2 p-4">
        <LilDude />

        <Img
          src="https://cdn.shopify.com/s/files/1/0068/5015/0457/t/4/assets/jackboys-album-cover-700.jpg"
          width="700"
          height="700"
        />
      </div>
      <div className="w-1/2 pb-2 p-4">
        <Img
          src="https://is3-ssl.mzstatic.com/image/thumb/Music128/v4/79/bc/23/79bc230d-506a-302b-4790-38a5fe7bdc1f/source/900x900bb.jpg"
          width="700"
          height="700"
        />
      </div>
      <div className="w-1/2 pb-2 p-4">
        <Img
          src="https://images-na.ssl-images-amazon.com/images/I/810sB9JjELL._SL900_.jpg"
          width="700"
          height="700"
        />
      </div>
      <div className="w-1/2 pb-2 p-4">
        <Img
          src="https://images-na.ssl-images-amazon.com/images/I/81UIqmn17WL._SL800_.jpg"
          width="700"
          height="700"
        />
      </div>
      <div className="w-1/2 pb-2 p-4">
        <Img
          src="https://i1.sndcdn.com/artworks-000088468287-jju25j-t500x500.jpg"
          width="700"
          height="700"
        />
      </div>
      <div className="w-1/2 pb-2 p-4">
        <Img
          src="https://i1.sndcdn.com/artworks-000048622882-92hn84-t500x500.jpg"
          width="700"
          height="700"
        />
      </div>
    </section>
  );
}
