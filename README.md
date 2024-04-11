{navLinks.map((link) => {
return (
<Link key={link.id} to={link.path} className="sm:hidden">
<p>{link.title}</p>
</Link>
);
})}
