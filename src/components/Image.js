import picture from "../components/assets/picture.PNG"

export function Image() {
    return (
        <div className="image">
            <img className="profile" src={picture} alt="my profile" />
        </div>
    )
}