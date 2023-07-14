import africancoupleclipped from "../../images/africancoupleclipped.png";
import Section from "../components/Section";

export default function BrideandGroom() {
  return (
    <section id="brideandgroom">
      <div className="py-20 bg-gray-300">
        <div className="text-center flex flex-col items-center justify-center mt-40 mb-20">
        <h2 className="font-openSans text-3xl uppercase font-light tracking-tight text-gold">
            Meet the bride & groom
          </h2>
        </div>

        <div className="">
          <Section>
          <div className="grid md:grid-flow-col items-center justify-items-center">
            <div className="lg:px-28 px-7">
            <h3 className="font-windsong text-3xl md:mt-10 text-gold">Bride first/last name</h3>
            <p className="font-openSans text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            <h3 className="font-windsong text-3xl md:mt-10 text-gold">Groom first/last name</h3>
            <p className="font-openSans text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
            <div className="">
            <img src={africancoupleclipped} alt="African couple" className="rounded-full lg:pr-10" />
            </div>
          </div>
          <div className="grid md:grid-flow-col items-center justify-items-center">
            <div className="lg:px-28 px-7">
            <h3 className="font-windsong text-3xl md:mt-10 text-gold">How we met</h3>
            <p className="font-openSans text-sm leading-6 mb-14 md:mb-0 text-slate-500 my-3 font-bold">12 July 2018</p>
            <p className="font-openSans text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
            <div className="lg:px-28 px-7">
            <h3 className="font-windsong text-3xl md:mt-10 text-gold">The proposal</h3>
            <p className="font-openSans text-sm leading-6 mb-14 md:mb-0 text-slate-500 my-3 font-bold">12 July 2018</p>
            <p className="font-openSans text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
          </div>
          </Section>
        </div>
      </div>
    </section>
  );
}
