export class Dot {
    protected position: { x: number; y: number };
    protected radius: number;

    public constructor(x: number, y: number, radius: number) {
        this.position = {x, y};
        this.radius = radius;
    }

    public Position() {
        return this.position;
    }
    
    public Radius() {
        return this.radius;
    }

    public SetPosition(data: {x: number, y: number}) {
        this.position = data;
    }

    public setRadius(radius: number) {
        this.radius = radius;
    }
}
