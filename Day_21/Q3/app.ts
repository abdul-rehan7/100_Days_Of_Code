// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

type shape = {
  kind: "circle" | "rectangle";
  radius?:number
  width?:number
  height?:number
};

let circle:shape = {
    kind:"circle",
    radius:12
}

let rectangle:shape = {
    kind:"rectangle",
    width:12,
    height:7
}


console.log(rectangle);
console.log(circle);
