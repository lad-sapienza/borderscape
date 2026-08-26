import { Carousel } from "react-bootstrap";

const base = import.meta.env.BASE_URL;

const slides = [
  { src: "01-nile-at-first-cataract.jpg", caption: "The Nile at the First Cataract (© AKAP Archive)" },
  { src: "02-dynasty-zero-rock-art.jpg", caption: "Documenting Dynasty Zero rock art at Nag el-Hamdulab (© AKAP Archive)" },
  { src: "03-predynastic-cemetery.jpg", caption: "Excavating the Predynastic cemetery of Nag el-Qarmila (© AKAP Archive)" },
  { src: "04-eastern-desert.jpg", caption: "Surveying the Eastern Desert at Wadi Abu Subeira (© AKAP Archive)" },
];

export default function Slide() {
  return (
    <div className="site-carousel">
      <Carousel>
        {slides.map((slide) => (
          <Carousel.Item key={slide.src}>
            <img
              src={`${base}images/desert/${slide.src}`}
              className="d-block w-100"
              alt={slide.caption}
            />
            <Carousel.Caption>
              <p>{slide.caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
