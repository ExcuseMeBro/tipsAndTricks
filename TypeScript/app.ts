// https://betterprogramming.pub/11-tips-that-make-you-a-better-typescript-programmer-16893fcf3167
// *** #1 tip ***
type Measure = { radius: number };
type Style = { color: string };

// typed { radius: number; color: string }
type Circle = Measure & Style;

const shape: Circle = {
    radius: 3,
    color: 'red'
}
console.log(shape)

// *** #2 tip | Understand Declared Type and Narrowed Type ***
/*function foo(x: string | number) {
    if (typeof x === 'string') {
        // x's type is narrowed to string, so .length is valid
        console.log(x.length);

        // assignment respects declaration type, not narrowed type
        x = 1;
        console.log(x.length); // disallowed because x is now number
    } else {
        console.log("else")
    }
}*/

// *** #3 tip | Use Discriminated Union Instead of Optional Fields ***
type CircleType = { kind: 'circle'; radius: number };
type Rect = { kind: 'rect'; width: number; height: number };
type Shape = CircleType | Rect;

function getArea(shape: Shape) {
    return shape.kind === 'circle' ?
        Math.PI * shape.radius ** 2
        : shape.width * shape.height;
}

// https://www.telerik.com/blogs/10-quick-tips-learned-using-typescript

// https://dev.to/ruppysuppy/7-secret-typescript-tricks-pros-use-3ckg

// *** #4 tip | Use Union and Intersection Types ***
type RectOrCircle = Rect | Circle;
type RectAndCircle = Rect & Circle;

// *** #5 tip | Use Optional and Default Parameters ***
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Hi")); // Hi, Bob!

// https://javascript.plainenglish.io/10-typescript-tips-and-tricks-every-developer-should-know-dd00d745dd71
// https://softwaremill.com/4-typescript-tips-to-improve-your-developer-experience-that-you-might-not-know/
// https://www.totaltypescript.com/tips