function Box() {
    return (
        <mesh rotation={[1, 1, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}


export default Box;