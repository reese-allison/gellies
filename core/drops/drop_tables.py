from random import randint

eyes = ['anime-swirl', 'basic', 'cat', 'circle']
eye_gradients = ['basic']
bodies = ['basic']
body_gradients = ['bao-bun', 'blueberry-cobler', 'slime', 'sunrise', 'twinkie']
mouths = ['basic']

table_1 = {
    'eyes': [
        ['anime-swirl', 1],
        ['circle', 1],
        ['cat', 29],
        ['basic', 70]
    ],
    'eye-gradient': [
        ['basic', 100]
    ],
    'body': [
        ['basic', 100]
    ],
    'body-gradient': [
        ['bao-bun', 10],
        ['twinkie', 10],
        ['blueberry-cobler', 1],
        ['sunrise', 100],
        ['slime', 200]
    ],
    'mouth': [
        ['basic', 100]
    ],
}

table_random = {
    'eyes': [
        ['circle', 1]
    ],
    'eye-gradient': [
        ['basic', 100]
    ],
    'body': [
        ['teddy', 100],
        ['cat', 100],
        ['basic', 100],
        ['alien', 100],
        ['fin', 100]
    ],
    'body-gradient': [
        ['random', 200]
    ],
    'mouth': [
        ['basic', 100],
        ['bored', 100],
        ['snaggle', 100],
        ['none', 100],
        ['surprised', 100],
        ['frown', 100]
    ],
}

tables = {
    'basic': table_1,
    'random': table_random
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
        'body-gradient': weighted_random(table['body-gradient']),
        'eye-gradient': weighted_random(table['eye-gradient'])
    }
    svgs['id'] = randint(1, 100000000)
    return svgs
