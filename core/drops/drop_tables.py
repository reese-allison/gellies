from copy import deepcopy
from random import randint

all_drops = {
    'eyes': [
        ['circle', 100],
        ['cat', 100],
        ['cute', 100],
        ['pumpkin', 100],
        ['teddy', 100],
        ['smiley', 100],
        ['knockout', 100],
        ['pouty', 100],
        ['disappointed', 100]
    ],
    'body': [
        ['devil', 100],
        ['deer', 100],
        ['teddy', 100],
        ['cat', 100],
        ['cute', 100],
        ['alien', 100],
        ['axolotl', 100]
    ],
    'gradient': [
        ["avocado", 100],
        ["blueberry", 100],
        ["bone", 100],
        ["bubblegum", 100],
        ["cranberry", 100],
        ["fish", 100],
        ["jade", 100],
        ["lavender", 100],
        ["olive", 100],
        ["key-lime", 100],
        ["candy", 100],
        ["sardine", 100],
        ["mint", 100],
        ["lime", 100],
        ["marshmallow", 100],
        ["strawberry", 100],
        ["tomato", 100],
        ["eggplant", 100],
        ["dough", 100],
        ["ice", 100],
        ["lemon", 100],
        ["pear", 100],
        ["lemon", 100]
    ],
    'mouth': [
        ['cute', 100],
        ['bored', 100],
        ['snaggle', 100],
        ['null', 100],
        ['disappointed', 100],
        ['frown', 100],
        ['buck-teeth', 100],
        ['fanged', 100],
        ['smiley', 100],
        ['pouty', 100],
        ['cat', 100],
        ['teddy', 100],
        ['skeleton', 100],
        ['pumpkin', 100],
        ['knockout', 100]
    ],
}

random_gradients = deepcopy(all_drops)
random_gradients['gradient'] = [['random', 1]]

tables = {
    'all': all_drops,
    'gradient': random_gradients
}


def weighted_random(pairs):
    total = sum(pair[1] for pair in pairs)
    r = randint(1, total)
    for (value, weight) in pairs:
        r -= weight
        if r <= 0: return value


def get_moji(table_name):
    table = tables[table_name]
    svgs = {
        'eyes': weighted_random(table['eyes']),
        'mouth': weighted_random(table['mouth']),
        'body': weighted_random(table['body']),
        'gradient': weighted_random(table['gradient'])
    }
    svgs['id'] = randint(1, 100000000)
    return svgs
