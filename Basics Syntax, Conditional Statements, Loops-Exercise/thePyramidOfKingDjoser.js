// it is made of stone, marble, lapis lazuli, gold
//incremet is the steps of each  step
//base is the width and the lenght
// the bulk is made out of stone
// the outer layer is made out of marble
//every fifth step's outer layer is made out of lapis insted of marble
// the final step is made out of gold
//The pyramid is built with 1x1 blocks with a steps equal to the given increment.
// the first step has a width and length equal to the base and the next steps are reduced by 2 blocks(1 from each side)
// the steps of every step is equal to the increment
//Since the outer layer of each step is made of decorative material, to calculate the required stone for one step,
// the width and length by 2 blocks (one from each side), find its area, and multiply it by the increment. The
//rest of the step is made out of lapis lazuli for every fifth step from the bottom and marble for all other steps. To find
//the amount needed, you may, for example, find its perimeter and reduce it by 4 (to compensate for the overlapping
//corners), and multiply the result by the increment. See the drawing for details (grey is stone, white is decoration).

function pyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 0;
    let lenght = 0;
    let width = 0;
    let area = 0;
    let perimeter =0 ;
    let height = 0;
    for (let size = base; size >= 1; size -= 2) {// loop for the steps

        let lastLoop = false;
        perimeter = 0;
        area = 0;
        width = 0;
        lenght = 0;
        steps++;
        width = size - 2;
        lenght = size - 2;
        area = width * lenght;
        perimeter = ((4 * size) - 4);
        if (size === 1 || size === 2) {
            gold = (size*size) * increment;
            lastLoop = true;
        }
        else {
            stone += area * increment;
        }
        if (!lastLoop) {
            if (steps % 5 === 0) {//fifth step which is made of lapis
                lapis += perimeter * increment;
            }
            else {
                marble += perimeter * increment;
            }
        }
    }
    stone = Math.ceil(stone);
    marble = Math.ceil(marble);
    lapis = Math.ceil(lapis);
    gold = Math.ceil(gold);
    height = Math.floor(steps * increment);
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}
pyramidOfKingDjoser( 23,
    0.5
    )