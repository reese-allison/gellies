from copy import deepcopy
from random import randint

all_drops = {
    'eyes': [
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
        ['dot', 100],
        ['swirl', 100],
        ['frog', 100],
        ['sleepy', 100]
    ],
    'body': [
        ['devil', 100],
        ['deer', 100],
        ['teddy', 100],
        ['cat', 100],
        ['cute', 100],
        ['alien', 100],
        ['axolotl', 100],
        ['bunny', 100]
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
        ["pear", 100],
        ["lemon", 100],
        ["fire", 100],
        ["water", 100],
        ["firefly", 100]
    ],
    'mouth': [
        ['cute', 100],
        ['bored', 100],
        ['snaggle', 100],
        ['no', 100],
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
        ['sabor-tooth', 100]
    ],
    'hat': [
        ['no', 100],
        ['fancy', 100]
    ],
    'pattern':[
        ['no', 100],
        ['whisker', 100],
        ['beauty_mark', 100],
        ['freckle', 100],
        ['scar_(left)', 100],
        ['scar_(right)', 100],
    ]
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

def get_part_list():
    table = tables['all']
    svg_list = {
        'eyes':[],
        'mouth':[],
        'body':[],
        'gradient':[],
        'hat': [],
        'pattern': []
    }
    for element in table:
        for x in table[element]:
            svg_list[element].append(x[0])
    #svg_list['id'] = 'menu'
    return svg_list

def get_part(type, number):
    table = tables['all']
    return table[type][number][0]

def get_moji(table_name):
    table = tables[table_name]
    svgs = {
        'eyes': weighted_random(table['eyes']),
        'mouth': weighted_random(table['mouth']),
        'body': weighted_random(table['body']),
        'gradient': weighted_random(table['gradient']),
        'hat': weighted_random(table['hat']),
        'pattern': weighted_random(table['pattern'])
    }
    svgs['id'] = randint(1, 100000000)
    return svgs
