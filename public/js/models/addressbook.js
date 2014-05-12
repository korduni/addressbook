App.Addressbook = DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	phoneNumber: DS.attr('string'),
	bio: DS.attr('string')
});

App.Addressbook.FIXTURES = [
	{
		id: 1,
		name: 'Jake Owen',
		email: 'jowen@jake.com',
		phoneNumber: '+43 673 138924',
		bio: 'Joshua Ryan Owen is an American country music artist signed to RCA Records Nashville, he released his debut album Startin with Me that year'
	},
	{
		id: 2,
		name: 'John Doe',
		email: 'john@example.com',
		phoneNumber: '+1 888 135780',
		bio: 'A mysteriou, imaginable, non-existing character who seems to be potrayed almost everwhere'
	},
	{
		id: 3,
		name: 'Keith Urban',
		email: 'keith@urban.com',
		phoneNumber: '+121 348 154748',
		bio: 'Keith Lionel Urban is a New Zealand-Australian country music singer, songwriter, guitarist, and television music competition judge. When he was 2 years old, his parents moved the family to Australia, where his career eventually began!'
	},
	{
		id: 4,
		name: 'Blake Shelton',
		email: 'bk@blakeshelton.com',
		phoneNumber: '+255 713 808904',
		bio: 'Blake Tollison Shelton is an American country music singer and television personality. In 2001, he made his debut with the single "Austin"'
	},
	{
		id: 5,
		name: 'Jason Aldean',
		email: 'jason@baldeanband.com',
		phoneNumber: '+1 888 135780',
		bio: 'Jason Aldine Williams, known professionally as Jason Aldean, is an American country singer. Since 2005, Aldean has recorded for Broken Bow Records, an independent record label for which he has released five albums and sixteen singles'
	},
	{
		id: 6,
		name: 'Kenny Rogers',
		email: 'krogers@brogers.com',
		phoneNumber: '+44 780 889340',
		bio: 'Kenneth Ray Rogers is an American singer-songwriter, photographer, record producer, actor, entrepreneur and author, and member of the Country Music Hall of Fame'
	},
	{
		id: 7,
		name: 'Band Perry',
		email: 'bp@bandperry.com',
		phoneNumber: '+1 888 135780',
		bio: 'The Band Perry is an American country music group composed of siblings Kimberly Perry, Reid Perry, and Neil Perry. They signed to Republic Nashville in August 2009 and released their self-titled debut album on October 12, 2010'
	},
	{
		id: 8,
		name: 'Taylor Swift',
		email: 'taySwift@tylswift.com',
		phoneNumber: '+44 780 854989',
		bio: 'Taylor Alison Swift is an American singer-songwriter. Raised in Wyomissing, Pennsylvania, Swift moved to Nashville, Tennessee at 14 to pursue a career in country music'
	},
	{
		id: 9,
		name: 'Brad Paisley',
		email: 'bpaisely@bradpaisely.com',
		phoneNumber: '+1 540 657683',
		bio: 'Brad Douglas Paisley is an American singer-songwriter and musician. His songs are frequently laced with humor and pop culture references. Paisley was the 2008 CMA and ACM Male Vocalist of the Year winner.'
	},
	{
		id: 10,
		name: 'George Strait',
		email: 'gstrait@georgestraight.com',
		phoneNumber: '+44 780 889340',
		bio: 'George Harvey Strait is an American country music singer, actor and music producer known as the "King of Country" and one of the most influential and popular recording artists of all time'
	}
];