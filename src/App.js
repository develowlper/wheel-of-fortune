import React from "react";
import { Group, Image, Layer, Stage, Text, Wedge } from "react-konva";
import { nanoid } from "nanoid";
import faker from "faker";
import useImage from "use-image";

const prizes = [
  {
    value: 25,
    type: "Gutschein",
    currency: "€",
    id: nanoid(5),
    color: faker.internet.color(),
    image: {
      src: "/images/sensape-logo.png",
      scale: 0.25
    }
  },
  {
    value: 10,
    type: "Rabatt",
    currency: "%",
    id: nanoid(5),
    color: faker.internet.color(),
    image: {
      src: "/images/sensape-logo.png",
      scale: 0.25
    }
  },
  {
    value: 100,
    type: "Gutschein",
    currency: "€",
    id: nanoid(5),
    color: faker.internet.color(),
    image: {
      src: "/images/sensape-logo.png",
      scale: 0.25
    }
  },
  {
    value: 500,
    type: "Gutschein",
    currency: "€",
    id: nanoid(5),
    color: faker.internet.color(),
    image: {
      src: "/images/sensape-logo.png",
      scale: 0.25
    }
  },
  {
    value: 100,
    type: "Rabatt",
    currency: "%",
    id: nanoid(5),
    color: faker.internet.color(),
    image: {
      src: "/images/sensape-logo.png",
      scale: 0.25
    }
  },
  {
    value: 20,
    type: "Gutschein",
    currency: "€",
    id: nanoid(5),
    color: faker.internet.color(),
    image: {
      src: "/images/sensape-logo.png",
      scale: 0.25
    }
  },
  {
    value: 10,
    type: "Rabatt",
    currency: "€",
    id: nanoid(5),
    color: faker.internet.color(),
    image: {
      src: "/images/sensape-logo.png",
      scale: 0.25
    }
  }
];

const Segment = ({ prize, index, total }) => {
  console.log(prize);

  const currentCount = index + 1;

  const angle = 360 / total;

  const rotation = -90 - angle * currentCount;

  console.log(prize.image.src);

  const [image] = useImage(prize.image.src);

  console.log(image);

  if (!image) {
    console.log(image);
    return <></>;
  }

  const scale = prize.image.scale;
  const imgHeight = image.height * scale;
  const imgWidth = image.width * scale;
  const fontSize = 15;

  return (
    <Group rotation={rotation}>
      <Wedge
        radius={200}
        fill={prize.color}
        angle={angle}
        rotation={-angle / 2}
        stroke="black"
        strokeWidth={2}
      />
      <Group rotation={180} x={190} y={-25}>
        <Text
          fill="black"
          text={`${prize.value}${prize.currency} ${prize.type}`}
          fontSize={fontSize}
          y={-imgWidth + fontSize}
          x={imgHeight + 5}
          listening={false}
        />
        <Image
          width={imgWidth}
          height={imgHeight}
          rotation={-90}
          image={image}
        />
      </Group>
    </Group>
  );
};

export default function App() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <Stage width={width} height={height} style={{ background: "lightgrey" }}>
      <Layer>
        {/* <Wedge
          fill="red"
          stroke="white"
          strokeWidth={2}
          lineJoin="round"

          angle={45}
          radius={30}
          x={width / 2}
          y={33}
          rotation={-112.5}
          shadowColor="black"
          shadowOffsetX={3}
          shadowOffsetY={3}
          shadowBlur={2}
          shadowOpacity={0.5}
        /> */}
        <Group x={width / 2} y={height / 2}>
          {prizes.map((prize, index) => {
            return (
              <Segment
                key={prize.id}
                prize={prize}
                index={index}
                total={prizes.length}
              />
            );
          })}
        </Group>
      </Layer>
    </Stage>
  );
}
