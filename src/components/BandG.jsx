import africancouple from "../../images/africancoupleclipped.png";
import wreath from "../../images/wreath.png";

export default function BandG() {
  return (
    <section>
      <div className="py-20">
        <div className="text-center flex flex-col items-center justify-center">
          <img src={wreath} alt="wreath" className="w-24 mb-5" />
          <h2 className="font-merriweather text-offWhite text-3xl font-light tracking-widest">
            Meet the bride & groom
          </h2>
        </div>

        <div className="">
          <div className="grid md:grid-flow-col items-center justify-items-center">
            <div className="lg:px-10 px-7">
            <h3 className="font-windsong text-3xl md:mt-10">Bride first/last name</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            <h3 className="font-windsong text-3xl md:mt-10">Groom first/last name</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
            <div className="bg-[url('../images/flowers.png')]">
            <img src={africancouple} alt="African couple" className="rounded-full" />
            </div>
          </div>
          <div className="grid md:grid-flow-col items-center justify-items-center">
            <div className="lg:px-10 px-7">
            <h3 className="font-windsong text-3xl md:mt-10">How we met</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">12 July 2018</p>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
            <div className="lg:px-10 px-7">
            <h3 className="font-windsong text-3xl md:mt-10">The proposal</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">12 July 2018</p>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
