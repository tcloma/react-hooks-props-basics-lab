const Links = (props) => {

  return (
    <div>
      <h3>Links</h3>
      <a href={props.userdata.links.github}>{props.userdata.links.github}</a>
      <a href={props.userdata.links.linkedin}>{props.userdata.links.linkedin}</a>

    </div>
  );
}

export default Links;