function solve(input) {
    let inventoryInput = input.shift();
    let inventory = inventoryInput.split(', ');

    let commandLine = input.shift();
    while (commandLine != 'Craft!') {
        let [command, argument] = commandLine.split(' - ');

        switch (command) {
            case 'Collect':
                collectItem(inventory, argument);

                inventory = collectItem(inventory, argument)
                break;
            case 'Drop':
                dropItem(inventory, argument);
                break;
            case 'Combine Items':
                let [oldItem, newItem] = argument.split(':');
                combineItems(inventory, oldItem, newItem);
                break;
            case 'Renew':
                renewItem(inventory, argument);
                break;
        }


        commandLine = input.shift();
    }

    function collectItem(inventory, item) {
        if (!inventory.includes(item)) {
            inventory.push(item);
        }
    }

    function dropItem(inventory, item) {
        let itemIndex = inventory.indexOf(item);

        if (itemIndex > -1) {
            inventory.splice(itemIndex, 1);
        }
    }

    function combineItems(inventory, oldItem, newItem) {
        let oldItemIndex = inventory.indexOf(oldItem);

        if (oldItemIndex > -1) {
            inventory.splice(oldItemIndex + 1 , 0, newItem);
        }
    }

    function renewItem(inventory, item) {
        let itemIndex = inventory.indexOf(item);

        if (itemIndex > -1) {
            inventory.splice(itemIndex, 1);
            inventory.push(item);
        }
    }

    // Print inventory
    let result = inventory.join(', ');
    console.log(result);
}

solve(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Combine Items - Sword:JP', 'Renew - Sword', 'Craft!']);