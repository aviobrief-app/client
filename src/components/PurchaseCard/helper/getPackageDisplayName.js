export const getPackageDisplayName = (packageDbName, quantity) => {
    const packageMatrix = {
        BOTTLE: quantity < 2 ? 'бутилка' : 'бутилки',
        BOX: quantity < 2 ? 'кутия' : 'кутии',
        PACK: quantity < 2 ? 'пакет' : 'пакета',
        CAN: quantity < 2 ? 'кен' : 'кенчета',
        OTHER: quantity < 2 ? '-' : '-',
    }

    return packageMatrix[packageDbName];
}