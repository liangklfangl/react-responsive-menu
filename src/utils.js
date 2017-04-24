function generateMenuItem(item) {
  //Generate an Menu.Item
    const child = <Link to={item.link.to}>
           {text}
      </Link>
    return (
      <Menu.Item key={item.key.toLowerCase()}>
        {child}
      </Menu.Item>
    );
  }
module.exports = {
  generateMenuItem
}