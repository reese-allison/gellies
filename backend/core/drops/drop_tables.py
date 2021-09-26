from copy import deepcopy
from random import randint

all_drops = {
    'eyes': [
        ['dot', 100],
        ['shiny', 100],
        ['cat', 100],
        ['cute', 100],
        ['pumpkin', 100],
        ['teddy', 100],
        ['smiley', 100],
        ['knockout', 100],
        ['pouty', 100],
        ['bored', 100],
        ['surprised', 100],
        ['winking_(right)', 100],
        ['winking_(left)', 100],
        ['swirl', 100],
        ['frog', 100],
        ['sleepy', 100],
        ['hungry', 100]
    ],
    'body': [
        ['cute', 100],
        ['devil', 100],
        ['deer', 100],
        ['teddy', 100],
        ['cat', 100],
        ['alien', 100],
        ['axolotl', 100],
        ['bunny', 100],
        ['monster', 100]
    ],
    'gradient': [
        ["lemon", 100],
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
        ["pear", 100],
        ["fire", 100],
        ["water", 100],
        ["firefly", 100]
    ],
    'mouth': [
        ['no', 100],
        ['swirl', 100],
        ['cute', 100],
        ['bored', 100],
        ['snaggle', 100],
        ['frown', 100],
        ['buck_teeth', 100],
        ['fanged', 100],
        ['smiley', 100],
        ['pouty', 100],
        ['cat', 100],
        ['teddy', 100],
        ['skeleton', 100],
        ['pumpkin', 100],
        ['knockout', 100],
        ['surprised', 100],
        ['sabor-tooth', 100],
        ['hungry', 100]
    ],
    'headwear': [
        ['no', 100],
        ['tophat', 100],
        ['bow_(red)', 100],
        ['bow_(blue)', 100],
        ['bow_(green)', 100],
    ],
    'pattern':[
        ['no', 100],
        ['whisker', 100],
        ['beauty_mark', 100],
        ['freckle', 100],
        ['scar_(left)', 100],
        ['scar_(right)', 100],
        ['rosy', 100],
        ['patchwork', 100]
    ]
}


def weighted_random(pairs):
    total = sum(pair[1] for pair in pairs)
    r = randint(1, total)
    for (value, weight) in pairs:
        r -= weight
        if r <= 0: return value
