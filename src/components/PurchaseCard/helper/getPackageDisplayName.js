export const getPackageDisplayName = (packageDbName) => {
    const packageMatrix = {
        BOTTLE: 'бутилка',
        BOX: 'кутия',
        PACK: 'пакет',
        CAN: 'кен',
        OTHER: '-',
    }

    return packageMatrix[packageDbName];
}