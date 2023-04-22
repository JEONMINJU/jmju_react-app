export default function Profile({image, name, title, isNew}) {
	return (
		<div className="profile">
			<figure className="photo">
				<img src={image} alt="avatar" />
				{isNew && <span className="profile__badge">NEW</span>}
			</figure>
			<span>{name}</span>
			<p>{title}</p>
		</div>
	)
}