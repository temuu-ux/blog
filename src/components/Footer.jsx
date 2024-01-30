export default function Footer() {
  return (
    <div className="father">
      <div className="flex justify-around">
        <div className="felx">
          <div>
            <p>About</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <p>Email : info@jstemplate.net</p>
            <p>Phone : 880 123 456 789</p>
          </div>
        </div>
        <div className="">
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-2">
          <img src="/F.svg" alt="" />
          <img src="/T.svg" alt="" />
          <img src="/insta.svg" alt="" />
          <img src="/in.svg" alt="" />
        </div>
      </div>
      <div className="bottom">
        <div>
          <img src="/Logo.svg" alt="" />
          <img src="/Text.svg" alt="" />
        </div>
        <div>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
