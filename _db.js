let comics = [
    {id: '1', title: 'The Amazing Spider-Man', publishers: ['Marvel']},
    {id: '2', title: 'Batman: The Killing Joke', publishers: ['DC Comics']},
    {id: '3', title: 'Saga', publishers: ['Image Comics']},
    {id: '4', title: 'Watchmen', publishers: ['DC Comics']},
    {id: '5', title: 'Sandman', publishers: ['Vertigo']},
    {id: '6', title: 'Black Hammer', publishers: ['Dark Horse Comics']},
    {id: '7', title: 'Ms. Marvel', publishers: ['Marvel']},
    {id: '8', title: 'The Wicked + The Divine', publishers: ['Image Comics']},
    {id: '9', title: 'Daredevil', publishers: ['Marvel']},
    {id: '10', title: 'V for Vendetta', publishers: ['Vertigo']},
]

let artists = [
    {id: '1', name: 'Stan Lee', verified: true},
    {id: '2', name: 'Alan Moore', verified: true},
    {id: '3', name: 'Neil Gaiman', verified: true},
    {id: '4', name: 'Jeff Lemire', verified: true},
    {id: '5', name: 'G. Willow Wilson', verified: true},
    {id: '6', name: 'Kieron Gillen', verified: true},
    {id: '7', name: 'Frank Miller', verified: true},
]

let reviews = [
    {id: '1', rating: 9, content: 'The Amazing Spider-Man redefines the superhero genre with its unique blend of humor and action. Stan Lee´s creation remains timeless.', artist_id: '1', comic_id: '1'},
    {id: '2', rating: 10, content: 'Batman: The Killing Joke is a dark and poignant narrative that explores the psyche of its characters. Alan Moore´s masterpiece.', artist_id: '2', comic_id: '2'},
    {id: '3', rating: 7, content: 'Saga offers an expansive universe and complex characters, making it a staple in modern comics. A must-read for any graphic novel enthusiast.', artist_id: '3', comic_id: '3'},
    {id: '4', rating: 8, content: 'Watchmen is not just a comic book; it\'s a critique of heroism, a nuanced story that is as relevant today as it was at its release.', artist_id: '2', comic_id: '4'},
    {id: '5', rating: 9, content: 'Sandman blends mythology, history, and horror in a way that is both epic and intimate. Neil Gaiman\'s storytelling is unparalleled.', artist_id: '3', comic_id: '5'},
    {id: '6', rating: 8, content: 'Black Hammer is a love letter to superhero comics while simultaneously turning the genre on its head. Jeff Lemire at his best.', artist_id: '4', comic_id: '6'},
    {id: '7', rating: 9, content: 'Ms. Marvel introduces a relatable hero for a new generation, balancing superheroics with touching moments of personal growth.', artist_id: '5', comic_id: '7'},
    {id: '8', rating: 8, content: 'The Wicked + The Divine is a visually stunning and conceptually rich exploration of fame, mortality, and divinity.', artist_id: '6', comic_id: '8'},
    {id: '9', rating: 10, content: 'Daredevil by Frank Miller is gritty, compelling, and elevates the character to new heights, defining the man without fear.', artist_id: '7', comic_id: '9'},
    {id: '10', rating: 9, content: 'V for Vendetta\'s exploration of freedom vs. control is hauntingly relevant, with Alan Moore crafting a narrative that sticks with you long after reading.', artist_id: '2', comic_id: '10'},
]


export default { comics, artists, reviews }