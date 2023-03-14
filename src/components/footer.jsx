function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="footer text-center absolute bottom-0 left-0 w-full">
      <span className=" inline-block text-xs text-gray-200">
        Designed and Developed By Chucks N &#169;{year}
      </span>
    </div>
  );
}

export default Footer;
