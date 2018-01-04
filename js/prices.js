$(document).ready(() => {
    $(".nav-tabs li").on("click", () => {

        $(this).addClass("active");
    })
})

$(document).ready(() => {
    var price = 0;
    //Men Section
    var shirt = 0, trouser = 0, tShirt = 0, kurta = 0, kurtaFancy = 0, coat = 0,
        pyjama = 0, shorts = 0, sweater = 0, leatherJacket = 0, rexineJacket = 0, halfSweater = 0,
        kurtaPyjama = 0, coatPaint = 0, sherwaniNonBridal = 0, sherwaniBridal = 0;
    //Women Section
    var ladiesKurta = 0, ladiesKurtaHeavy = 0, top = 0, saree = 0, sareeSilk = 0, sareeHeavy = 0, lehenga = 0,
        lehengaBridal = 0, dupatta = 0, blouse = 0, skirt = 0, ladiesSuit = 0, wCoat = 0, stole = 0;
    //House Holds Section
    var curtainSmall = 0, curtainMedium = 0, curtainLarge = 0, pillowCover = 0, faceTowel = 0, largeTowel = 0, bedsheetCoverSingle = 0,
        bedsheetCoverDouble = 0, tableCover = 0, carpet = 0;
    //Woolen Section
    var jacket = 0, halfJacket = 0, woolenSweater = 0, blanketSingle = 0, blanketDouble = 0, quiltSingle = 0, quiltDouble = 0, muffler = 0, shawl = 0;
    //Charakh Section
    var charakhKurtaPyjama = 0, charakhLadiesSuit = 0, pantShirt = 0, charakhSaree = 0;
    //Accessories
    var toySmall = 0, toyMedium = 0, toyLarge = 0, umbrella = 0, tie = 0, cap = 0, hat = 0, backPack = 0;

    minusbtnClick = (pri, title) => {
        console.log(title)
        switch (title) {
            //Men Section
            case 'SHIRT':
                //minus the shirt qunatity by 1 and price by item price until shirt quantity have a positive value    
                if (shirt > 0) {
                    shirt--;
                    price -= pri;
                }
                //update the price value
                $("#total").html(price);
                //update the number
                $('#shirtQuantity').html(shirt);
                break;
            case 'TROUSER':
                if (trouser > 0) {
                    trouser--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#trouserQuantity').html(trouser);
                break;
            case 'T-SHIRT':
                if (tShirt > 0) {
                    tShirt--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#tShirtQuantity').html(tShirt);
                break;
            case 'KURTA':
                if (kurta > 0) {
                    kurta--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#kurtaQuantity').html(kurta);
                break;
            case 'KURTA-FANCY':
                if (kurtaFancy > 0) {
                    kurtaFancy--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#kurtaFancyQuantity').html(kurtaFancy);
                break;
            case 'COAT':
                if (coat > 0) {
                    coat--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#coatQuantity').html(coat);
                break;
            case 'PYJAMA':
                if (pyjama > 0) {
                    pyjama--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#pyjamaQuantity').html(pyjama);
                break;
            case 'SHORTS':
                if (shorts > 0) {
                    shorts--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#shortsQuantity').html(shorts);
                break;
            case 'SWEATER':
                if (sweater > 0) {
                    sweater--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#sweaterQuantity').html(sweater);
                break;
            case 'LEATHER-JACKET':
                if (leatherJacket > 0) {
                    leatherJacket--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#leatherJacketQuantity').html(leatherJacket);
                break;
            case 'REXINE-JACKET':
                if (rexineJacket > 0) {
                    rexineJacket--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#rexineJacketQuantity').html(rexineJacket);
                break;
            case 'HALF-SWEATER':
                if (halfSweater > 0) {
                    halfSweater--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#halfSweaterQuantity').html(halfSweater);
                break;
            case 'KURTA-PYJAMA':
                if (kurtaPyjama > 0) {
                    kurtaPyjama--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#kurtaPyjamaQuantity').html(kurtaPyjama);
                break;
            case 'COAT-PANT':
                if (coatPaint > 0) {
                    coatPaint--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#coatPantQuantity').html(coatPaint);
                break;
            case 'SHERWANI-NON-BRIDAL':
                if (sherwaniNonBridal > 0) {
                    sherwaniNonBridal--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#sherwaniNonBridalQuantity').html(sherwaniNonBridal);
                break;
            case 'SHERWANI-BRIDAL':
                if (sherwaniBridal > 0) {
                    sherwaniBridal--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#sherwaniBridalQuantity').html(sherwaniBridal);
                break;

            //Women Section
            case 'LADIES-KURTA':
                if (ladiesKurta > 0) {
                    ladiesKurta--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#ladiesKurtaQuantity').html(ladiesKurta);
                break;
            case 'LADIES-KURTA-HEAVY':
                if (ladiesKurtaHeavy > 0) {
                    ladiesKurtaHeavy--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#ladiesKurtaHeavyQuantity').html(ladiesKurtaHeavy);
                break;
            case 'TOP':
                if (top > 0) {
                    top--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#topQuantity').html(top);
                break;
            case 'SAREE':
                if (saree > 0) {
                    saree--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#sareeQuantity').html(saree);
                break;
            case 'SAREE-SILK':
                if (sareeSilk > 0) {
                    sareeSilk--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#sareeSilkQuantity').html(sareeSilk);
                break;
            case 'SAREE-HEAVY':
                if (sareeHeavy > 0) {
                    sareeHeavy--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#sareeHeavyQuantity').html(sareeHeavy);
                break;
            case 'LEHENGA':
                if (lehenga > 0) {
                    lehenga--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#lehengaQuantity').html(lehenga);
                break;
            case 'LEHENGA-BRIDAL':
                if (lehengaBridal > 0) {
                    lehengaBridal--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#lehengaBridalQuantity').html(lehengaBridal);
                break;
            case 'DUPATTA':
                if (dupatta > 0) {
                    dupatta--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#dupattaQuantity').html(dupatta);
                break;
            case 'BLOUSE':
                if (blouse > 0) {
                    blouse--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#blouseQuantity').html(blouse);
                break;
            case 'SKIRT':
                if (skirt > 0) {
                    skirt--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#skirtQuantity').html(skirt);
                break;
            case 'LADIES-SUIT':
                if (ladiesSuit > 0) {
                    ladiesSuit--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#ladiesSuitQuantity').html(ladiesSuit);
                break;
            case 'LADIES-COAT':
                if (wCoat > 0) {
                    wCoat--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#ladiesCoatQuantity').html(wCoat);
                break;
            case 'STOLE':
                if (stole > 0) {
                    stole--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#stoleQuantity').html(stole);
                break;

            //House Holds Section
            case 'CURTAIN-SMALL':
                debugger;
                if (curtainSmall > 0) {
                    curtainSmall--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#curtainSmallQuantity').html(curtainSmall);
                break;
            case 'CURTAIN-MEDIUM':
                if (curtainMedium > 0) {
                    curtainMedium--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#curtainMediumQuantity').html(curtainMedium);
                break;
            case 'CURTAIN-LARGE':
                if (curtainLarge > 0) {
                    curtainLarge--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#curtainLargeQuantity').html(curtainLarge);
                break;
            case 'PILLOW-COVER':
                if (pillowCover > 0) {
                    pillowCover--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#pillowCoverQuantity').html(pillowCover);
                break;
            case 'FACE-TOWAL':
                if (faceTowel > 0) {
                    faceTowel--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#faceTowelQuantity').html(faceTowel);
                break;
            case 'LARGE-TOWAL':
                if (largeTowel > 0) {
                    largeTowel--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#largeTowelQuantity').html(largeTowel);
                break;
            case 'BEDSHEET/COVER-SINGLE':
                if (bedsheetCoverSingle > 0) {
                    bedsheetCoverSingle--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#bedsheetCoverSingleQuantity').html(bedsheetCoverSingle);
                break;
            case 'BEDSHEET/COVER-DOUBLE':
                if (bedsheetCoverDouble > 0) {
                    bedsheetCoverDouble--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#bedsheetCoverDoubleQuantity').html(bedsheetCoverDouble);
                break;
            case 'TABLE-COVER':
                if (tableCover > 0) {
                    tableCover--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#tableCoverQuantity').html(tableCover);
                break;
            case 'CARPET':
                if (carpet > 0) {
                    carpet--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#carpetQuantity').html(carpet);
                break;


            //Woolen Section
            case 'JACKET':
                if (jacket > 0) {
                    jacket--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#jacketQuantity').html(jacket);
                break;
            case 'HALF-JACKET':
                if (halfJacket > 0) {
                    halfJacket--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#halfJacketQuantity').html(halfJacket);
                break;
            case 'WOOLEN-SWEATER':
                if (woolenSweater > 0) {
                    woolenSweater--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#woolenSweaterQuantity').html(woolenSweater);
                break;
            case 'BLANKET-SINGLE':
                if (blanketSingle > 0) {
                    blanketSingle--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#blankSingleQuantity').html(blanketSingle);
                break;
            case 'BLANKET-DOUBLE':
                if (blanketDouble > 0) {
                    blanketDouble--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#blanketDoubleQuantity').html(blanketDouble);
                break;
            case 'QUILT-SINGLE':
                if (quiltSingle > 0) {
                    quiltSingle--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#quiltSingleQuantity').html(quiltSingle);
                break;
            case 'QUILT-DOUBLE':
                if (quiltDouble > 0) {
                    quiltDouble--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#quiltDoubleQuantity').html(quiltDouble);
                break;
            case 'MUFFLER':
                if (muffler > 0) {
                    muffler--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#mufflerQuantity').html(muffler);
                break;
            case 'SHAWL':
                if (shawl > 0) {
                    shawl--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#shawlQuantity').html(shawl);
                break;

            //Charakh
            case 'CHARAKH-KURTA-PYJAMA':
                if (charakhKurtaPyjama > 0) {
                    charakhKurtaPyjama--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#charakhKurtaPyjamaQuantity').html(charakhKurtaPyjama);
                break;
            case 'CHARAKH-LADIES-SUIT':
                if (charakhLadiesSuit > 0) {
                    charakhLadiesSuit--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#charakhLadiesSuitQuantity').html(charakhLadiesSuit);
                break;
            case 'PANT-SHIRT':
                if (pantShirt > 0) {
                    pantShirt--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#pantShirtQuantity').html(pantShirt);
                break;
            case 'CHARAKH-SAREE':
                if (charakhSaree > 0) {
                    charakhSaree--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#charakhSareeQuantity').html(charakhSaree);
                break;

            //Accessories Section
            case 'TOY-SMALL':
                if (toySmall > 0) {
                    toySmall--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#toySmallQuantity').html(toySmall);
                break;
            case 'TOY-MEDIUM':
                if (toyMedium > 0) {
                    toyMedium--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#toyMediumQuantity').html(toyMedium);
                break;
            case 'TOY-LARGE':
                if (toyLarge > 0) {
                    toyLarge--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#toyLargeQuantity').html(toyLarge);
                break;
            case 'UMBRELLA':
                if (umbrella > 0) {
                    umbrella--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#umbrellaQuantity').html(umbrella);
                break;
            case 'TIE':
                if (tie > 0) {
                    tie--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#tieQuantity').html(tie);
                break;
            case 'CAP':
                if (cap > 0) {
                    cap--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#capQuantity').html(cap);
                break;
            case 'HAT':
                if (hat > 0) {
                    hat--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#hatQuantity').html(hat);
                break;
            case 'BACK-PACK':
                if (backPack > 0) {
                    backPack--;
                    price -= pri;
                }
                $("#total").html(price);
                $('#backPackQuantity').html(backPack);
                break;
        }
    }

    plusBtnClick = (pri, title) => {
        switch (title) {
            //Men Section
            case 'SHIRT':
                //increase the number
                shirt++;
                //increase the pice
                price += pri;
                //update the price
                $("#total").html(price);
                //update the number
                $('#shirtQuantity').html(shirt);
                break;
            case 'TROUSER':
                trouser++;
                price += pri;
                $("#total").html(price);
                $('#trouserQuantity').html(trouser);
                break;
            case 'T-SHIRT':
                tShirt++;
                price += pri;
                $("#total").html(price);
                $('#tShirtQuantity').html(tShirt);
                break;
            case 'KURTA':
                kurta++;
                price += pri;
                $("#total").html(price);
                $('#kurtaQuantity').html(kurta);
                break;
            case 'KURTA-FANCY':
                kurtaFancy++;
                price += pri;
                $("#total").html(price);
                $('#kurtaFancyQuantity').html(kurtaFancy);
                break;
            case 'COAT':
                coat++;
                price += pri;
                $("#total").html(price);
                $('#coatQuantity').html(coat);
                break;
            case 'PYJAMA':
                pyjama++;
                price += pri;
                $("#total").html(price);
                $('#pyjamaQuantity').html(pyjama);
                break;
            case 'SHORTS':
                shorts++;
                price += pri;
                $("#total").html(price);
                $('#shortsQuantity').html(shorts);
                break;
            case 'SWEATER':
                sweater++;
                price += pri;
                $("#total").html(price);
                $('#sweaterQuantity').html(sweater);
                break;
            case 'LEATHER-JACKET':
                leatherJacket++;
                price += pri;
                $("#total").html(price);
                $('#leatherJacketQuantity').html(leatherJacket);
                break;
            case 'REXINE-JACKET':
                rexineJacket++;
                price += pri;
                $("#total").html(price);
                $('#rexineJacketQuantity').html(rexineJacket);
                break;
            case 'HALF-SWEATER':
                halfSweater++;
                price += pri;
                $("#total").html(price);
                $('#halfSweaterQuantity').html(halfSweater);
                break;
            case 'KURTA-PYJAMA':
                kurtaPyjama++;
                price += pri;
                $("#total").html(price);
                $('#kurtaPyjamaQuantity').html(kurtaPyjama);
                break;
            case 'COAT-PANT':
                coatPaint++;
                price += pri;
                $("#total").html(price);
                $('#coatPantQuantity').html(coatPaint);
                break;
            case 'SHERWANI-NON-BRIDAL':
                sherwaniNonBridal++;
                price += pri;
                $("#total").html(price);
                $('#sherwaniNonBridalQuantity').html(sherwaniNonBridal);
                break;
            case 'SHERWANI-BRIDAL':
                sherwaniBridal++;
                price += pri;
                $("#total").html(price);
                $('#sherwaniBridalQuantity').html(sherwaniBridal);
                break;

            //Women Section
            case 'LADIES-KURTA':
                ladiesKurta++;
                price += pri;
                $("#total").html(price);
                $('#ladiesKurtaQuantity').html(ladiesKurta);
                break;
            case 'LADIES-KURTA-HEAVY':
                ladiesKurtaHeavy++;
                price += pri;
                $("#total").html(price);
                $('#ladiesKurtaHeavyQuantity').html(ladiesKurtaHeavy);
                break;
            case 'TOP':
                top++;
                price += pri;
                $("#total").html(price);
                $('#topQuantity').html(top);
                break;
            case 'SAREE':
                saree++;
                price += pri;
                $("#total").html(price);
                $('#sareeQuantity').html(saree);
                break;
            case 'SAREE-SILK':
                sareeSilk++;
                price += pri;
                $("#total").html(price);
                $('#sareeSilkQuantity').html(sareeSilk);
                break;
            case 'SAREE-HEAVY':
                sareeHeavy++;
                price += pri;
                $("#total").html(price);
                $('#sareeHeavyQuantity').html(sareeHeavy);
                break;
            case 'LEHENGA':
                lehenga++;
                price += pri;
                $("#total").html(price);
                $('#lehengaQuantity').html(lehenga);
                break;
            case 'LEHENGA-BRIDAL':
                lehengaBridal++;
                price += pri;
                $("#total").html(price);
                $('#lehengaBridalQuantity').html(lehengaBridal);
                break;
            case 'DUPATTA':
                dupatta++;
                price += pri;
                $("#total").html(price);
                $('#dupattaQuantity').html(dupatta);
                break;
            case 'BLOUSE':
                blouse++;
                price += pri;
                $("#total").html(price);
                $('#blouseQuantity').html(blouse);
                break;
            case 'SKIRT':
                skirt++;
                price += pri;
                $("#total").html(price);
                $('#skirtQuantity').html(skirt);
                break;
            case 'LADIES-SUIT':
                ladiesSuit++;
                price += pri;
                $("#total").html(price);
                $('#ladiesSuitQuantity').html(ladiesSuit);
                break;
            case 'LADIES-COAT':
                wCoat++;
                price += pri;
                $("#total").html(price);
                $('#ladiesCoatQuantity').html(wCoat);
                break;
            case 'STOLE':
                stole++;
                price += pri;
                $("#total").html(price);
                $('#stoleQuantity').html(stole);
                break;

            //House Hold Section
            case 'CURTAIN-SMALL':
                curtainSmall++;
                price += pri;
                $("#total").html(price);
                $('#curtainSmallQuantity').html(curtainSmall);
                break;
            case 'CURTAIN-MEDIUM':
                curtainMedium++;
                price += pri;
                $("#total").html(price);
                $('#curtainMediumQuantity').html(curtainMedium);
                break;
            case 'CURTAIN-LARGE':
                curtainLarge++;
                price += pri;
                $("#total").html(price);
                $('#curtainLargeQuantity').html(curtainLarge);
                break;
            case 'PILLOW-COVER':
                pillowCover++;
                price += pri;
                $("#total").html(price);
                $('#pillowCoverQuantity').html(pillowCover);
                break;
            case 'FACE-TOWAL':
                faceTowel++;
                price += pri;
                $("#total").html(price);
                $('#faceTowelQuantity').html(faceTowel);
                break;
            case 'LARGE-TOWAL':
                largeTowel++;
                price += pri;
                $("#total").html(price);
                $('#largeTowelQuantity').html(largeTowel);
                break;
            case 'BEDSHEET/COVER-SINGLE':
                bedsheetCoverSingle++;
                price += pri;
                $("#total").html(price);
                $('#bedsheetCoverSingleQuantity').html(bedsheetCoverSingle);
                break;
            case 'BEDSHEET/COVER-DOUBLE':
                bedsheetCoverDouble++;
                price += pri;
                $("#total").html(price);
                $('#bedsheetCoverDoubleQuantity').html(bedsheetCoverDouble);
                break;
            case 'TABLE-COVER':
                tableCover++;
                price += pri;
                $("#total").html(price);
                $('#tableCoverQuantity').html(tableCover);
                break;
            case 'CARPET':
                carpet++;
                price += pri;
                $("#total").html(price);
                $('#carpetQuantity').html(carpet);
                break;

            //Woolen Section
            case 'JACKET':
                jacket++;
                price += pri;
                $("#total").html(price);
                $('#jacketQuantity').html(jacket);
                break;
            case 'HALF-JACKET':
                halfJacket++;
                price += pri;
                $("#total").html(price);
                $('#halfJacketQuantity').html(halfJacket);
                break;
            case 'WOOLEN-SWEATER':
                woolenSweater++;
                price += pri;
                $("#total").html(price);
                $('#woolenSweaterQuantity').html(woolenSweater);
                break;
            case 'BLANKET-SINGLE':
                blanketSingle++;
                price += pri;
                $("#total").html(price);
                $('#blankSingleQuantity').html(blanketSingle);
                break;
            case 'BLANKET-DOUBLE':
                blanketDouble++;
                price += pri;
                $("#total").html(price);
                $('#blanketDoubleQuantity').html(blanketDouble);
                break;
            case 'QUILT-SINGLE':
                quiltSingle++;
                price += pri;
                $("#total").html(price);
                $('#quiltSingleQuantity').html(quiltSingle);
                break;
            case 'QUILT-DOUBLE':
                quiltDouble++;
                price += pri;
                $("#total").html(price);
                $('#quiltDoubleQuantity').html(quiltDouble);
                break;
            case 'MUFFLER':
                muffler++;
                price += pri;
                $("#total").html(price);
                $('#mufflerQuantity').html(muffler);
                break;
            case 'SHAWL':
                shawl++;
                price += pri;
                $("#total").html(price);
                $('#shawlQuantity').html(shawl);
                break;

            //Charakh
            case 'CHARAKH-KURTA-PYJAMA':
                charakhKurtaPyjama++;
                price += pri;
                $("#total").html(price);
                $('#charakhKurtaPyjamaQuantity').html(charakhKurtaPyjama);
                break;
            case 'CHARAKH-LADIES-SUIT':
                charakhLadiesSuit++;
                price += pri;
                $("#total").html(price);
                $('#charakhLadiesSuitQuantity').html(charakhLadiesSuit);
                break;
            case 'PANT-SHIRT':
                pantShirt++;
                price += pri;
                $("#total").html(price);
                $('#pantShirtQuantity').html(pantShirt);
                break;
            case 'CHARAKH-SAREE':
                charakhSaree++;
                price += pri;
                $("#total").html(price);
                $('#charakhSareeQuantity').html(charakhSaree);
                break;

            //Accessories Section
            case 'TOY-SMALL':
                toySmall++;
                price += pri;
                $("#total").html(price);
                $('#toySmallQuantity').html(toySmall);
                break;
            case 'TOY-MEDIUM':
                toyMedium++;
                price += pri;
                $("#total").html(price);
                $('#toyMediumQuantity').html(toyMedium);
                break;
            case 'TOY-LARGE':
                toyLarge++;
                price += pri;
                $("#total").html(price);
                $('#toyLargeQuantity').html(toyLarge);
                break;
            case 'UMBRELLA':
                umbrella++;
                price += pri;
                $("#total").html(price);
                $('#umbrellaQuantity').html(umbrella);
                break;
            case 'TIE':
                tie++;
                price += pri;
                $("#total").html(price);
                $('#tieQuantity').html(tie);
                break;
            case 'CAP':
                cap++;
                price += pri;
                $("#total").html(price);
                $('#capQuantity').html(cap);
                break;
            case 'HAT':
                hat++;
                price += pri;
                $("#total").html(price);
                $('#hatQuantity').html(hat);
                break;
            case 'BACK-PACK':
                backPack++;
                price += pri;
                $("#total").html(price);
                $('#backPackQuantity').html(backPack);
                break;
        }
    }
})