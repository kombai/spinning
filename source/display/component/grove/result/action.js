const germinate = (twig) => {
    let leaves = [];
    if (twig && twig.value) {
        leaves = twig.value.map((leaf, index) => {
            // correct leaf type;
            if (leaf.type == null) {
                leaf.type = 'none';
            }

            if (leaf.value == null) {
                leaf.value = leaf.name;
            }

            return {
                name: twig.name,
                type: leaf.type,
                value: leaf.value,
                width: leaf.width,
                height: leaf.height
            }
        });
    }
    return leaves;
};

class GraftAction {

    constructor(twigSource, pageSize) {

        const properties = twigSource.map(germinate).filter((item) => {
            return item.length;
        });
        const factor = [];
        let coeff = 1; // coefficient
        let length = properties.length, i;
        for (i = length - 1; i >= 0; --i) {
            coeff = properties[i].length * coeff;
            factor.unshift(coeff);
        }
        factor.shift(); // don't need the first factor;

        this.state = {
            pageSize: pageSize,
            factor: factor,
            totalTwig: coeff,
            properties: properties
        };
    }

    getListTwig(currentTwig) {
        let { properties, factor, totalTwig, pageSize } = this.state;
        let maxIndex = currentTwig + pageSize;
        let listTwig = []; // display twigs;
        let index = currentTwig;

        while (index < maxIndex && index < totalTwig) {
            let leafIndex = 0;
            let twig = [];
            let i = 0;
            let mod = index;

            // create new twig by mixing leaves;
            for (i = 0; i < factor.length; ++i) {
                leafIndex = Math.floor(mod / factor[i]);
                twig.push(properties[i][leafIndex]);
                mod = mod % factor[i];
            }
            
            if (properties[i]) {
                twig.push(properties[i][mod]);
                listTwig[index - currentTwig] = twig;
            }

            ++index;
        }

        return listTwig;
    }
}

export default GraftAction;
