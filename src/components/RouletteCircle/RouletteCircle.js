import React, { Component, useState } from "react";
import PT from "prop-types";
import { connect } from "react-redux";
import { Stage, Layer, Circle, Group } from "react-konva";
import { coordsUtils } from "../../util";
import fillPath from "../../img/client-1.jpg";
// import { Util } from "konva";
import ws from "../../services/ws";
import "./RouletteCircle.scss";

const image = new window.Image();
image.src = fillPath;

const Avatar = ({ x, y, id }) => (
    <Circle
        key={id}
        x={x}
        y={y}
        radius={30}
        shadowBlur={20}
        stroke="black"
        strokeWidth={2}
        fillPatternImage={image}
        offset={{ x: 100, y: 100 }}
    />
);
Avatar.propTypes = {
    x: PT.number.isRequired,
    y: PT.number.isRequired,
    id: PT.number.isRequired
};

const c_offset = { x: 300, y: 300 };

const Сylinder = ({ users, active }) => {
    const [rotate, setRotate] = useState(0);
    if (active) {
        requestAnimationFrame(setRotate);
    }
    return (
        <Group
            key="group"
            width={600}
            height={600}
            rotation={rotate}
            offset={c_offset}
            x={300}
            y={300}
        >
            <Circle x={300} y={300} radius={250} fill="black" opacity={0.2} />
            {coordsUtils.getCoords(users.length).map(([x, y], idx) => (
                <Avatar
                    key={idx}
                    idx={users[idx].id}
                    x={x * 150 + 350}
                    y={y * 150 + 350}
                    id={users[idx].id}
                />
            ))}
        </Group>
    );
};

Сylinder.propTypes = {
    users: PT.array.isRequired,
    active: PT.bool
};

class RouletteCircle extends Component {
    static propTypes = {
        users: PT.array.isRequired
    };

    constructor() {
        super();
        this.startGame = this.startGame.bind(this);
        this.startRotate = this.startRotate.bind(this);
        this.stopRotate = this.stopRotate.bind(this);
    }

    state = {
        active: false
    };

    componentDidMount() {
        this.startListening();
    }

    startListening() {
        ws.on("START_GAME", this.startRotate);
        ws.on("END_GAME", this.stopRotate);
    }

    startGame() {
        ws.emit("POST_START_GAME");
    }

    startRotate() {
        this.setState({
            active: true
        });
    }

    stopRotate() {
        this.setState({
            active: false
        });
    }

    render() {
        const { users } = this.props;
        const { active } = this.state;
        return (
            <div className="roulette">
                <Stage width={600} height={600}>
                    <Layer>
                        <Сylinder users={users} active={active} />
                    </Layer>
                </Stage>
                <div>
                    <button className="spin" onClick={this.startGame}>
                        Spin!
                    </button>
                </div>
            </div>
        );
    }
}
export default connect(state => ({ users: state.users }))(RouletteCircle);
