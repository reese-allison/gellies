import random


def roll(attack, advantage, disadvantage):
    '''
    :param attack: The attack strength ingteger
    :param advantage: The number of advantage rolls
    :param disadvantage: The number of disadvantage rolls
    :returns: An integer
    '''
    strength = min(abs(advantage - disadvantage), 2) + 1
    is_advantage = (advantage - disadvantage) > 0
    is_disadvantage = (disadvantage - advantage) > 0
    if is_advantage:
        return max([random.randint(0, 2) for _ in range(strength)])
    elif is_disadvantage:
        return min([random.randint(0, 2) for _ in range(strength)])
    else:
        return random.randint(0, 2)


def damage(attack, advantage=0, disadvantage=0):
    '''
    :param attack: The attack strength ingteger
    :param advantage: The number of advantage rolls
    :param disadvantage: The number of disadvantage rolls
    :returns: An integer
    '''
    total_damage = 0
    for _ in range(attack):
        total_damage += roll(attack, advantage, disadvantage)
    return total_damage
