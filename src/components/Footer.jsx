export default function Footer() {
  return (
    <footer>
      <div className="my-5 py-10 mx-5 grid md:grid-flow-col md:justify-items-center text-sm">
        <p>Wedding RSVP.</p>
        <p className="group transition-all duration-300 ease-in-out my-6 md:my-0">
          <span className="bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out">
            <a href="gh">See site source code.</a>
          </span>
        </p>
        <p>Created by Chukwudi Barrah. 2023.</p>
      </div>
    </footer>
  );
}
