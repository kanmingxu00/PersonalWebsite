import { Color, Vector3 } from "three"

type ButtonProps = {
    position: Vector3,
    args: any,
    color: Color,
}
const Button = (props: ButtonProps) => {
    const { position, args, color } = props;
    return (
        <mesh position={position}>
            <cylinderGeometry args={args}/>
            <meshStandardMaterial color={color} />
        </mesh>
    )
}

export default Button