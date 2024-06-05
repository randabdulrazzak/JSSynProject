const subject = ['I am ', 'My body is ', 'My mind is ', 'My energy is ', 'My spirit is ', 'My emotions are ', 'My thoughts are ', 'My attitude is ', 'My perspective is ', 'My beliefs are ', 'My mentality is ', 'My values are ', 'My heart is ', 'My divinity is ', 'My past is ', 'My future is ', 'My existence is '];
const action = ['aligned with ', 'manifesting ', 'creating ', 'choosing ', 'appreciating ', 'pursuing ', 'investing in ', 'cultivating ', 'worthy of ', 'deserving of ', 'enjoying ', 'honoring ', 'open to ', 'moving towards ', 'sharing ', 'full of ', 'overflowing with ', 'inviting '];
const outcome = ['abundance!', 'health!', 'growth!', 'my dreams!', 'gratitude!', 'balance!', 'peace!', 'comfort!', 'safety!', 'support!', 'success!', 'opportunity!', 'love!', 'change!', 'courage!', 'respect!', 'inspiration!', 'beauty!'];

const generateMessage = () => {
    return subject[Math.floor(Math.random() * (subject.length - 1))] + action[Math.floor(Math.random() * (action.length - 1))] + outcome[Math.floor(Math.random() * (outcome.length - 1))];
}

console.log(generateMessage());