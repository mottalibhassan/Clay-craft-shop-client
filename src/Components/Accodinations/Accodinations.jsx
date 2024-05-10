
const Accodinations = () => {
    return (
        <div className="my-7">
            <div className="">
                <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
            </div>
            <div className="collapse bg-slate-100 my-2">
            <input type="radio" name="my-accordion-1" defaultChecked /> 
            <div className="collapse-title text-xl font-medium">
            What types of clay are commonly used in pottery?
            </div>
            <div className="collapse-content"> 
                <p>Pottery clay can be broadly categorized into earthenware, stoneware, and porcelain. Each type has its own unique characteristics and firing temperatures</p>
            </div>
            </div>
            <div className="collapse bg-slate-100 my-2">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            How do you prepare clay for pottery?
            </div>
            <div className="collapse-content"> 
                <p>Clay is typically wedged or kneaded to remove air bubbles and ensure uniform consistency. Then, its shaped into desired forms through techniques like throwing on a wheel or hand-building.</p>
            </div>
            </div>
            <div className="collapse bg-slate-100 my-2">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            What are some common pottery techniques?
            </div>
            <div className="collapse-content"> 
                <p>Popular pottery techniques include wheel-throwing, hand-building (using techniques like pinch, coil, and slab construction), sculpting, and glazing.</p>
            </div>
            </div>
            <div className="collapse bg-slate-100 my-2">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            What is glaze and how does it work in pottery?
            </div>
            <div className="collapse-content"> 
                <p>Glaze is a liquid mixture applied to pottery before firing. It forms a glassy surface when fired, adding color, texture, and protection to the clay surface.</p>
            </div>
            </div>
            <div className="collapse bg-slate-100 my-2">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            How do you achieve different colors in pottery?
            </div>
            <div className="collapse-content"> 
                <p> Pottery can be colored using various methods, including mixing different clay bodies, applying colored slips or underglazes, and using glazes with metal oxides that produce different hues when fired</p>
            </div>
            </div>
            <div className="collapse bg-slate-100 my-2">
            <input type="radio" name="my-accordion-1" /> 
            <div className="collapse-title text-xl font-medium">
            What is the difference between bisqueware and greenware?
            </div>
            <div className="collapse-content"> 
                <p>Bisqueware refers to pottery that has been fired once but not yet glazed, while greenware refers to unfired, dried pottery ready for its first firing.</p>
            </div>
            </div>
        </div>
    );
};

export default Accodinations;