---
layout: post
title: 'When Sysadmins Ruled the Earth'
author: Cory Doctorow
---

<p class="western" style="margin-bottom: 0.14in"><font face="Monaco"><font size="5"><i>When
Sysadmins Ruled the Earth</i></font></font></p>
<p class="western" style="margin-bottom: 0in"><i>Forematter:</i></p>
<p class="western" style="margin-bottom: 0in">This story is part of
Cory Doctorow’s 2007 short story collection “Overclocked: Stories
of the Future Present,” published by Thunder’s Mouth, a division
of Avalon Books. It is licensed under a Creative Commons
Attribution-NonCommercial-ShareAlike 2.5 license, about which you’ll
find more at the end of this file.</p>
<p class="western" style="margin-bottom: 0in">This story and the
other stories in the volume are available at:</p>
<p class="western" style="margin-bottom: 0in">http://craphound.com/overclocked</p>
<p class="western" style="margin-bottom: 0in">You can buy Overclocked
at finer bookstores everywhere, including Amazon:</p>
<p class="western" style="margin-bottom: 0in">http://www.amazon.com/exec/obidos/ASIN/1560259817/downandoutint-20</p>
<p class="western" style="margin-bottom: 0in">In the words of Woody
Guthrie:</p>
<p class="western" style="margin-bottom: 0in">“This song is
Copyrighted in U.S., under Seal of Copyright #154085, for a period of
28 years, and anybody caught singin it without our permission, will
be mighty good friends of ourn, cause we don’t give a dern. Publish
it. Write it. Sing it. Swing to it. Yodel it. We wrote it, that’s
all we wanted to do.”</p>
<p class="western" style="margin-bottom: 0in">Overclocked is
dedicated to Pat York, who made my stories better.</p>
<p class="western" style="margin-bottom: 0in">—</p>
<p class="western" style="margin-bottom: 0in"><i>Introduction to When
Sysadmins Ruled the Earth</i></p>
<p class="western" style="margin-bottom: 0in">I’ve changed careers
every two or three years ever since I dropped out of university in
1990, and one of the best gigs I ever had was working as a freelance
systems administrator, working in the steam tunnels of the
information age, pulling cables, configuring machines, keeping the
backups running, kicking the network in its soft and vulnerable
places. Sysadmins are the unsung heroes of the century, and if
they’re not busting you for sending racy IMs, or engaging in
unprofessional email conduct it’s purely out of their own goodwill.</p>
<p class="western" style="margin-bottom: 0in">There’s a pernicious
myth that the Internet was designed to withstand a nuclear war; while
that Strangelove wet-dream was undoubtedly present in the hindbrains
of the generals who greenlighted the network’s R&amp;D at companies
like Rand and BBN, it wasn’t really a big piece of the actual
engineering and design.</p>
<p class="western" style="margin-bottom: 0in">Nevertheless, it does
make for a compelling scenario, this vision of the sysadmins in their
cages around the world, watching with held breath as the generator
failed and the servers went dark, waiting out the long hours until
the power and the air run out. 
</p>
<p class="western" style="margin-bottom: 0in">This story originally
appeared in Baen’s Universe Magazine, an admirable, high-quality
online magazine edited by Eric Flint, himself a talented writer and a
passionate advocate for open and free culture.</p>
<p class="western" style="margin-bottom: 0in">Listeners to my podcast
heard this story as it was written, read aloud in serial chinks after
each composing session. The pressure of listeners writing in,
demanding to know what happened next, kept me honest and writing.</p>
<p class="western" style="margin-bottom: 0in">—</p>
<p class="western" style="margin-bottom: 0in">
<p class="western" style="margin-bottom: 0in">When Felix’s special
phone rang at two in the morning, Kelly rolled over and punched him
in the shoulder and hissed, “Why didn’t you turn that fucking
thing off before bed?”</p>
<p class="western" style="margin-bottom: 0in">“Because I’m on
call,” he said.</p>
<p class="western" style="margin-bottom: 0in">“You’re not a
fucking doctor,” she said, kicking him as he sat on the bed’s
edge, pulling on the pants he’d left on the floor before turning
in. “You’re a goddamned <i>systems administrator</i>.”</p>
<p class="western" style="margin-bottom: 0in">“It’s my job,” he
said.</p>
<p class="western" style="margin-bottom: 0in">“They work you like a
government mule,” she said. “You know I’m right. For Christ’s
sake, you’re a father now, you can’t go running off in the middle
of the night every time someone’s porn supply goes down. Don’t
answer that phone.”</p>
<p class="western" style="margin-bottom: 0in">He knew she was right.
He answered the phone.</p>
<p class="western" style="margin-bottom: 0in">“Main routers not
responding. BGP not responding.” The mechanical voice of the
systems monitor didn’t care if he cursed at it, so he did, and it
made him feel a little better.</p>
<p class="western" style="margin-bottom: 0in">“Maybe I can fix it
from here,” he said. He could login to the UPS for the cage and
reboot the routers. The UPS was in a different netblock, with its own
independent routers on their own uninterruptible power-supplies.</p>
<p class="western" style="margin-bottom: 0in">Kelly was sitting up in
bed now, an indistinct shape against the headboard. “In five years
of marriage, you have never once been able to fix anything from
here.” This time she was wrong—he fixed stuff from home all the
time, but he did it discreetly and didn’t make a fuss, so she
didn’t remember it. And she was right, too—he had logs that
showed that after 1AM, nothing could ever be fixed without driving
out to the cage. Law of Infinite Universal Perversity—AKA Felix’s
Law.</p>
<p class="western" style="margin-bottom: 0in">Five minutes later
Felix was behind the wheel. He hadn’t been able to fix it from
home. The independent router’s netblock was offline, too. The last
time that had happened, some dumbfuck construction worker had driven
a ditch-witch through the main conduit into the data-center and Felix
had joined a cadre of fifty enraged sysadmins who’d stood atop the
resulting pit for a week, screaming abuse at the poor bastards who
labored 24-7 to splice ten thousand wires back together.</p>
<p class="western" style="margin-bottom: 0in">His phone went off
twice more in the car and he let it override the stereo and play the
mechanical status reports through the big, bassy speakers of more
critical network infrastructure offline. Then Kelly called.</p>
<p class="western" style="margin-bottom: 0in">“Hi,” he said.</p>
<p class="western" style="margin-bottom: 0in">“Don’t cringe, I
can hear the cringe in your voice.”</p>
<p class="western" style="margin-bottom: 0in">He smiled
involuntarily. “Check, no cringing.”</p>
<p class="western" style="margin-bottom: 0in">“I love you, Felix,”
she said.</p>
<p class="western" style="margin-bottom: 0in">“I’m totally
bonkers for you, Kelly. Go back to bed.”</p>
<p class="western" style="margin-bottom: 0in">“2.0’s awake,”
she said. The baby had been Beta Test when he was in her womb, and
when her water broke, he got the call and dashed out of the office,
shouting, <i>The Gold Master just shipped!</i> They’d started
calling him 2.0 before he’d finished his first cry. “This little
bastard was born to suck tit.”</p>
<p class="western" style="margin-bottom: 0in">“I’m sorry I woke
you,” he said. He was almost at the data center. No traffic at 2AM.
He slowed down and pulled over before the entrance to the garage. He
didn’t want to lose Kelly’s call underground.</p>
<p class="western" style="margin-bottom: 0in">“It’s not waking
me,” she said. “You’ve been there for seven years. You have
three juniors reporting to you. Give them the phone. You’ve paid
your dues.”</p>
<p class="western" style="margin-bottom: 0in">“I don’t like
asking my reports to do anything I wouldn’t do,” he said.</p>
<p class="western" style="margin-bottom: 0in">“You’ve done it,”
she said. “Please? I hate waking up alone in the night. I miss you
most at night.”</p>
<p class="western" style="margin-bottom: 0in">“Kelly—”</p>
<p class="western" style="margin-bottom: 0in">“I’m over being
angry. I just miss you is all. You give me sweet dreams.”</p>
<p class="western" style="margin-bottom: 0in">“OK,” he said.</p>
<p class="western" style="margin-bottom: 0in">“Simple as that?”</p>
<p class="western" style="margin-bottom: 0in">“Exactly. Simple as
that. Can’t have you having bad dreams, and I’ve paid my dues.
From now on, I’m only going on night call to cover holidays.”</p>
<p class="western" style="margin-bottom: 0in">She laughed. “Sysadmins
don’t take holidays.”</p>
<p class="western" style="margin-bottom: 0in">“This one will,” he
said. “Promise.”</p>
<p class="western" style="margin-bottom: 0in">“You’re wonderful,”
she said. “Oh, gross. 2.0 just dumped core all over my bathrobe.”</p>
<p class="western" style="margin-bottom: 0in">“That’s my boy,”
he said.</p>
<p class="western" style="margin-bottom: 0in">“Oh that he is,”
she said. She hung up, and he piloted the car into the data-center
lot, badging in and peeling up a bleary eyelid to let the retinal
scanner get a good look at his sleep-depped eyeball.</p>
<p class="western" style="margin-bottom: 0in">He stopped at the
machine to get himself a guarana/medafonil power-bar and a cup of
lethal robot-coffee in a spill-proof clean-room sippy-cup. He wolfed
down the bar and sipped the coffee, then let the inner door read his
hand-geometry and size him up for a moment. It sighed open and gusted
the airlock’s load of positively pressurized air over him as he
passed finally to the inner sanctum.</p>
<p class="western" style="margin-bottom: 0in">It was bedlam. The
cages were designed to let two or three sysadmins maneuver around
them at a time. Every other inch of cubic space was given over to
humming racks of servers and routers and drives. Jammed among them
were no fewer than twenty other sysadmins. It was a regular
convention of black tee-shirts with inexplicable slogans, bellies
overlapping belts with phones and multitools.</p>
<p class="western" style="margin-bottom: 0in">Normally it was
practically freezing in the cage, but all those bodies were
overheating the small, enclosed space. Five or six looked up and
grimaced when he came through. Two greeted him by name. He threaded
his belly through the press and the cages, toward the Ardent racks in
the back of the room.</p>
<p class="western" style="margin-bottom: 0in">“Felix.” It was
Van, who wasn’t on call that night.</p>
<p class="western" style="margin-bottom: 0in">“What are you doing
here?” he asked. “No need for both of us to be wrecked tomorrow.”</p>
<p class="western" style="margin-bottom: 0in">“What? Oh. My
personal box is over there. It went down around 1:30 and I got woken
up by my process-monitor. I should have called you and told you I was
coming down—spared you the trip.”</p>
<p class="western" style="margin-bottom: 0in">Felix’s own server—a
box he shared with five other friends—was in a rack one floor down.
He wondered if it was offline too.</p>
<p class="western" style="margin-bottom: 0in">“What’s the story?”</p>
<p class="western" style="margin-bottom: 0in">“Massive flashworm
attack. Some jackass with a zero-day exploit has got every Windows
box on the net running Monte Carlo probes on every IP block,
including IPv6. The big Ciscos all run administrative interfaces over
v6, and they all fall over if they get more than ten simultaneous
probes, which means that just about every interchange has gone down.
DNS is screwy, too—like maybe someone poisoned the zone transfer
last night. Oh, and there’s an email and IM component that sends
pretty lifelike messages to everyone in your address book, barfing up
Eliza-dialog that keys off of your logged email and messages to get
you to open a Trojan.”</p>
<p class="western" style="margin-bottom: 0in">“Jesus.”</p>
<p class="western" style="margin-bottom: 0in">“Yeah.” Van was a
type-two sysadmin, over six feet tall, long pony-tail, bobbing Adam’s
apple. Over his toast-rack chest, his tee said CHOOSE YOUR WEAPON and
featured a row of polyhedral RPG dice.</p>
<p class="western" style="margin-bottom: 0in">Felix was a type-one
admin, with an extra seventy or eighty pounds all around the middle,
and a neat but full beard that he wore over his extra chins. His tee
said HELLO CTHULHU and featured a cute, mouthless, Hello-Kitty-style
Cthulhu. They’d known each other for fifteen years, having met on
Usenet, then f2f at Toronto Freenet beer-sessions, a Star Trek
convention or two, and eventually Felix had hired Van to work under
him at Ardent. Van was reliable and methodical. Trained as an
electrical engineer, he kept a procession of spiral notebooks filled
with the details of every step he’d ever taken, with time and date.</p>
<p class="western" style="margin-bottom: 0in">“Not even PEBKAC this
time,” Van said. Problem Exists Between Keyboard And Chair. Email
trojans fell into that category—if people were smart enough not to
open suspect attachments, email trojans would be a thing of the past.
But worms that ate Cisco routers weren’t a problem with the
lusers—they were the fault of incompetent engineers.</p>
<p class="western" style="margin-bottom: 0in">“No, it’s
Microsoft’s fault,” Felix said. “Any time I’m at work at 2AM,
it’s either PEBKAC or Microsloth.”</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">They ended up just
unplugging the frigging routers from the Internet. Not Felix, of
course, though he was itching to do it and get them rebooted after
shutting down their IPv6 interfaces. It was done by a couple
bull-goose Bastard Operators From Hell who had to turn two keys at
once to get access to their cage—like guards in a Minuteman silo.
95 percent of the long distance traffic in Canada went through this
building. It had <i>better</i> security than most Minuteman silos.</p>
<p class="western" style="margin-bottom: 0in">Felix and Van got the
Ardent boxes back online one at a time. They were being pounded by
worm-probes—putting the routers back online just exposed the
downstream cages to the attack. Every box on the Internet was
drowning in worms, or creating worm-attacks, or both. Felix managed
to get through to NIST and Bugtraq after about a hundred timeouts,
and download some kernel patches that should reduce the load the
worms put on the machines in his care. It was 10AM, and he was hungry
enough to eat the ass out of a dead bear, but he recompiled his
kernels and brought the machines back online. Van’s long fingers
flew over the administrative keyboard, his tongue protruding as he
ran load-stats on each one.</p>
<p class="western" style="margin-bottom: 0in">“I had two hundred
days of uptime on Greedo,” Van said. Greedo was the oldest server
in the rack, from the days when they’d named the boxes after Star
Wars characters. Now they were all named after Smurfs, and they were
running out of Smurfs and had started in on McDonaldland characters,
starting with Van’s laptop, Mayor McCheese.</p>
<p class="western" style="margin-bottom: 0in">“Greedo will rise
again,” Felix said. “I’ve got a 486 downstairs with over five
years of uptime. It’s going to break my heart to reboot it.”</p>
<p class="western" style="margin-bottom: 0in">“What the everlasting
shit do you use a 486 for?”</p>
<p class="western" style="margin-bottom: 0in">“Nothing. But who
shuts down a machine with five years uptime? That’s like
euthanizing your grandmother.”</p>
<p class="western" style="margin-bottom: 0in">“I wanna eat,” Van
said.</p>
<p class="western" style="margin-bottom: 0in">“Tell you what,”
Felix said. “We’ll get your box up, then mine, then I’ll take
you to the Lakeview Lunch for breakfast pizzas and you can have the
rest of the day off.”</p>
<p class="western" style="margin-bottom: 0in">“You’re on,” Van
said. “Man, you’re too good to us grunts. You should keep us in a
pit and beat us like all the other bosses. It’s all we deserve.”</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">“It’s your phone,”
Van said. Felix extracted himself from the guts of the 486, which had
refused to power up at all. He had cadged a spare power-supply from
some guys who ran a spam operation and was trying to get it fitted.
He let Van hand him the phone, which had fallen off his belt while he
was twisting to get at the back of the machine.</p>
<p class="western" style="margin-bottom: 0in">“Hey, Kel,” he
said. There was an odd, snuffling noise in the background. Static,
maybe? 2.0 splashing in the bath? “Kelly?”</p>
<p class="western" style="margin-bottom: 0in">The line went dead. He
tried to call back, but didn’t get anything—no ring nor
voicemail. His phone finally timed out and said NETWORK ERROR.</p>
<p class="western" style="margin-bottom: 0in">“Dammit,” he said,
mildly. He clipped the phone to his belt. Kelly wanted to know when
he was coming home, or wanted him to pick something up for the
family. She’d leave voicemail.</p>
<p class="western" style="margin-bottom: 0in">He was testing the
power-supply when his phone rang again. He snatched it up and
answered it. “Kelly, hey, what’s up?” He worked to keep
anything like irritation out of his voice. He felt guilty:
technically speaking, he had discharged his obligations to Ardent
Financial LLC once the Ardent servers were back online. The past
three hours had been purely personal—even if he planned on billing
them to the company.</p>
<p class="western" style="margin-bottom: 0in">There was sobbing on
the line.</p>
<p class="western" style="margin-bottom: 0in">“Kelly?” He felt
the blood draining from his face and his toes were numb.</p>
<p class="western" style="margin-bottom: 0in">“Felix,” she said,
barely comprehensible through the sobbing. “He’s dead, oh Jesus,
he’s dead.”</p>
<p class="western" style="margin-bottom: 0in">“Who? <i>Who</i>,
Kelly?”</p>
<p class="western" style="margin-bottom: 0in">“Will,” she said.</p>
<p class="western" style="margin-bottom: 0in"><i>Will?</i> he
thought. <i>Who the fuck is—</i>He dropped to his knees. William
was the name they’d written on the birth certificate, though they’d
called him 2.0 all along. Felix made an anguished sound, like a sick
bark.</p>
<p class="western" style="margin-bottom: 0in">“I’m sick,” she
said, “I can’t even stand anymore. Oh, Felix. I love you so
much.”</p>
<p class="western" style="margin-bottom: 0in">“Kelly? What’s
going on?”</p>
<p class="western" style="margin-bottom: 0in">“Everyone, everyone—”
she said. “Only two channels left on the tube. Christ, Felix, it
looks like dawn of the dead out the window—” He heard her retch.
The phone started to break up, washing her puke-noises back like an
echoplex.</p>
<p class="western" style="margin-bottom: 0in">“Stay there, Kelly,”
he shouted as the line died. He punched 911, but the phone went
NETWORK ERROR again as soon as he hit SEND.</p>
<p class="western" style="margin-bottom: 0in">He grabbed Mayor
McCheese from Van and plugged it into the 486’s network cable and
launched Firefox off the command line and googled for the Metro
Police site. Quickly, but not frantically, he searched for an online
contact form. Felix didn’t lose his head, ever. He solved problems
and freaking out didn’t solve problems.</p>
<p class="western" style="margin-bottom: 0in">He located an online
form and wrote out the details of his conversation with Kelly like he
was filing a bug report, his fingers fast, his description complete,
and then he hit SUBMIT.</p>
<p class="western" style="margin-bottom: 0in">Van had read over his
shoulder. “Felix—” he began.</p>
<p class="western" style="margin-bottom: 0in">“God,” Felix said.
He was sitting on the floor of the cage and he slowly pulled himself
upright. Van took the laptop and tried some news sites, but they were
all timing out. Impossible to say if it was because something
terrible was happening or because the network was limping under the
superworm.</p>
<p class="western" style="margin-bottom: 0in">“I need to get home,”
Felix said.</p>
<p class="western" style="margin-bottom: 0in">“I’ll drive you,”
Van said. “You can keep calling your wife.”</p>
<p class="western" style="margin-bottom: 0in">They made their way to
the elevators. One of the building’s few windows was there, a
thick, shielded porthole. They peered through it as they waited for
the elevator. Not much traffic for a Wednesday. Were there more
police cars than usual?</p>
<p class="western" style="margin-bottom: 0in">“<i>Oh my God</i>—”
Van pointed.</p>
<p class="western" style="margin-bottom: 0in">The CN Tower, a giant
white-elephant needle of a building loomed to the east of them. It
was askew, like a branch stuck in wet sand. Was it moving? It was. It
was heeling over, slowly, but gaining speed, falling northeast toward
the financial district. In a second, it slid over the tipping point
and crashed down. They felt the shock, then heard it, the whole
building rocking from the impact. A cloud of dust rose from the
wreckage, and there was more thunder as the world’s tallest
freestanding structure crashed through building after building.</p>
<p class="western" style="margin-bottom: 0in">“The Broadcast
Centre’s coming down,” Van said. It was—the CBC’s towering
building was collapsing in slow motion. People ran every way, were
crushed by falling masonry. Seen through the port-hole, it was like
watching a neat CGI trick downloaded from a file-sharing site.</p>
<p class="western" style="margin-bottom: 0in">Sysadmins were
clustering around them now, jostling to see the destruction.</p>
<p class="western" style="margin-bottom: 0in">“What happened?”
one of them asked.</p>
<p class="western" style="margin-bottom: 0in">“The CN Tower fell
down,” Felix said. He sounded far away in his own ears.</p>
<p class="western" style="margin-bottom: 0in">“Was it the virus?”</p>
<p class="western" style="margin-bottom: 0in">“The worm? What?”
Felix focused on the guy, who was a young admin with just a little
type-two flab around the middle.</p>
<p class="western" style="margin-bottom: 0in">“Not the worm,” the
guy said. “I got an email that the whole city’s quarantined
because of some virus. Bioweapon, they say.” He handed Felix his
Blackberry.</p>
<p class="western" style="margin-bottom: 0in">Felix was so engrossed
in the report—purportedly forwarded from Health Canada—that he
didn’t even notice that all the lights had gone out. Then he did,
and he pressed the Blackberry back into its owner’s hand, and let
out one small sob.</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">The generators kicked
in a minute later. Sysadmins stampeded for the stairs. Felix grabbed
Van by the arm, pulled him back.</p>
<p class="western" style="margin-bottom: 0in">“Maybe we should wait
this out in the cage,” he said.</p>
<p class="western" style="margin-bottom: 0in">“What about Kelly?”
Van said.</p>
<p class="western" style="margin-bottom: 0in">Felix felt like he was
going to throw up. “We should get into the cage, now.” The cage
had microparticulate air-filters.</p>
<p class="western" style="margin-bottom: 0in">They ran upstairs to
the big cage. Felix opened the door and then let it hiss shut behind
him.</p>
<p class="western" style="margin-bottom: 0in">“Felix, you need to
get home—”</p>
<p class="western" style="margin-bottom: 0in">“It’s a bioweapon,”
Felix said. “Superbug. We’ll be OK in here, I think, so long as
the filters hold out.”</p>
<p class="western" style="margin-bottom: 0in">“What?”</p>
<p class="western" style="margin-bottom: 0in">“Get on IRC,” he
said.</p>
<p class="western" style="margin-bottom: 0in">They did. Van had Mayor
McCheese and Felix used Smurfette. They skipped around the chat
channels until they found one with some familiar handles.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
pentagons gone/white house too</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
MY NEIGHBORS BARFING BLOOD OFF HIS BALCONY IN SAN DIEGO</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Someone knocked over the Gherkin. Bankers are fleeing the City like
rats.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
I heard that the Ginza’s on fire</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">Felix
typed: I’m in Toronto. We just saw the CN Tower fall. I’ve heard
reports of bioweapons, something very fast.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">Van
read this and said, “You don’t know how fast it is, Felix. Maybe
we were all exposed three days ago.”</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">Felix
closed his eyes. “If that were so we’d be feeling some symptoms,
I think.”</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Looks like an EMP took out Hong Kong and maybe Paris—realtime sat
footage shows them completely dark, and all netblocks there aren’t
routing</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
You’re in Toronto?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">It
was an unfamiliar handle.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Yes—on Front Street</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
my sisters at UofT and i cnt reach her—can you call her?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
No phone service</font></p>
<p class="western" style="margin-bottom: 0in">Felix typed, staring at
NETWORK PROBLEMS.</p>
<p class="western" style="margin-bottom: 0in">“I have a soft phone
on Mayor McCheese,” Van said, launching his voice-over-IP app. “I
just remembered.”</p>
<p class="western" style="margin-bottom: 0in">Felix took the laptop
from him and punched in his home number. It rang once, then there was
a flat, blatting sound like an ambulance siren in an Italian movie.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
No phone service</font></p>
<p class="western" style="margin-bottom: 0in">Felix typed again.</p>
<p class="western" style="margin-bottom: 0in">He looked up at Van,
and saw that his skinny shoulders were shaking. Van said, “Holy
motherfucking shit. The world is ending.”</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">Felix pried himself off
of IRC an hour later. Atlanta had burned. Manhattan was
hot—radioactive enough to screw up the webcams looking out over
Lincoln Plaza. Everyone blamed Islam until it became clear that Mecca
was a smoking pit and the Saudi Royals had been hanged before their
palaces.</p>
<p class="western" style="margin-bottom: 0in">His hands were shaking,
and Van was quietly weeping in the far corner of the cage. He tried
calling home again, and then the police. It didn’t work any better
than it had the last 20 times.</p>
<p class="western" style="margin-bottom: 0in">He sshed into his box
downstairs and grabbed his mail. Spam, spam, spam. More spam.
Automated messages. There—an urgent message from the intrusion
detection system in the Ardent cage.</p>
<p class="western" style="margin-bottom: 0in">He opened it and read
quickly. Someone was crudely, repeatedly probing his routers. It
didn’t match a worm’s signature, either. He followed the
traceroute and discovered that the attack had originated in the same
building as him, a system in a cage one floor below.</p>
<p class="western" style="margin-bottom: 0in">He had procedures for
this. He portscanned his attacker and found that port 1337 was
open—1337 was “leet” or “elite” in hacker number/letter
substitution code. That was the kind of port that a worm left open to
slither in and out of. He googled known sploits that left a listener
on port 1337, narrowed this down based on the fingerprinted operating
system of the compromised server, and then he had it.</p>
<p class="western" style="margin-bottom: 0in">It was an ancient worm,
one that every box should have been patched against years before. No
mind. He had the client for it, and he used it to create a root
account for himself on the box, which he then logged into, and took a
look around.</p>
<p class="western" style="margin-bottom: 0in">There was one other
user logged in, “scaredy,” and he checked the proccess monitor
and saw that scaredy had spawned all the hundreds of processes that
were probing him and plenty of other boxen.</p>
<p class="western" style="margin-bottom: 0in">He opened a chat:</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Stop probing my server</font></p>
<p class="western" style="margin-bottom: 0in">He expected bluster,
guilt, denial. He was surprised.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Are you in the Front Street data-center?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Yes</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Christ I thought I was the last one alive. I’m on the fourth floor.
I think there’s a bioweapon attack outside. I don’t want to leave
the clean room.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">Felix
whooshed out a breath.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
You were probing me to get me to trace back to you?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Yeah</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
That was smart</font></p>
<p class="western" style="margin-bottom: 0in">Clever bastard.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
I’m on the sixth floor, I’ve got one more with me.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
What do you know?</font></p>
<p class="western" style="margin-bottom: 0in">Felix pasted in the IRC
log and waited while the other guy digested it. Van stood up and
paced. His eyes were glazed over.</p>
<p class="western" style="margin-bottom: 0in">“Van? Pal?”</p>
<p class="western" style="margin-bottom: 0in">“I have to pee,” he
said.</p>
<p class="western" style="margin-bottom: 0in">“No opening the
door,” Felix said. “I saw an empty Mountain Dew bottle in the
trash there.”</p>
<p class="western" style="margin-bottom: 0in">“Right,” Van said.
He walked like a zombie to the trash can and pulled out the empty
magnum. He turned his back.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
I’m Felix</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Will</font></p>
<p class="western" style="margin-bottom: 0in">Felix’s stomach did a
slow somersault as he thought about 2.0.</p>
<p class="western" style="margin-bottom: 0in">“Felix, I think I
need to go outside,” Van said. He was moving toward the airlock
door. Felix dropped his keyboard and struggled to his feet and ran
headlong to Van, tackling him before he reached the door.</p>
<p class="western" style="margin-bottom: 0in">“Van,” he said,
looking into his friend’s glazed, unfocused eyes. “Look at me,
Van.”</p>
<p class="western" style="margin-bottom: 0in">“I need to go,” Van
said. “I need to get home and feed the cats.”</p>
<p class="western" style="margin-bottom: 0in">“There’s something
out there, something fast-acting and lethal. Maybe it will blow away
with the wind. Maybe it’s already gone. But we’re going to sit
here until we know for sure or until we have no choice. Sit down,
Van. Sit.”</p>
<p class="western" style="margin-bottom: 0in">“I’m cold, Felix.”</p>
<p class="western" style="margin-bottom: 0in">It was freezing.
Felix’s arms were broken out in gooseflesh and his feet felt like
blocks of ice.</p>
<p class="western" style="margin-bottom: 0in">“Sit against the
servers, by the vents. Get the exhaust heat.” He found a rack and
nestled up against it.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Are you there?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Still here—sorting out some logistics</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
How long until we can go out?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
I have no idea</font></p>
<p class="western" style="margin-bottom: 0in">No one typed anything
for quite some time then.</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">Felix had to use the
Mountain Dew bottle twice. Then Van used it again. Felix tried
calling Kelly again. The Metro Police site was down.</p>
<p class="western" style="margin-bottom: 0in">Finally, he slid back
against the servers and wrapped his arms around his knees and wept
like a baby.</p>
<p class="western" style="margin-bottom: 0in">After a minute, Van
came over and sat beside him, with his arm around Felix’s shoulder.</p>
<p class="western" style="margin-bottom: 0in">“They’re dead,
Van,” Felix said. “Kelly and my s—son. My family is gone.”</p>
<p class="western" style="margin-bottom: 0in">“You don’t know for
sure,” Van said.</p>
<p class="western" style="margin-bottom: 0in">“I’m sure enough,”
Felix said. “Christ, it’s all over, isn’t it?”</p>
<p class="western" style="margin-bottom: 0in">“We’ll gut it out a
few more hours and then head out. Things should be getting back to
normal soon. The fire department will fix it. They’ll mobilize the
Army. It’ll be OK.”</p>
<p class="western" style="margin-bottom: 0in">Felix’s ribs hurt. He
hadn’t cried since—Since 2.0 was born. He hugged his knees
harder.</p>
<p class="western" style="margin-bottom: 0in">Then the doors opened.</p>
<p class="western" style="margin-bottom: 0in">The two sysadmins who
entered were wild-eyed. One had a tee that said TALK NERDY TO ME and
the other one was wearing an Electronic Frontiers Canada shirt.</p>
<p class="western" style="margin-bottom: 0in">“Come on,” TALK
NERDY said. “We’re all getting together on the top floor. Take
the stairs.”</p>
<p class="western" style="margin-bottom: 0in">Felix found he was
holding his breath.</p>
<p class="western" style="margin-bottom: 0in">“If there’s a
bioagent in the building, we’re all infected,” TALK NERDY said.
“Just go, we’ll meet you there.”</p>
<p class="western" style="margin-bottom: 0in">“There’s one on the
sixth floor,” Felix said, as he climbed to his feet.</p>
<p class="western" style="margin-bottom: 0in">“Will, yeah, we got
him. He’s up there.”</p>
<p class="western" style="margin-bottom: 0in">TALK NERDY was one of
the Bastard Operators From Hell who’d unplugged the big routers.
Felix and Van climbed the stairs slowly, their steps echoing in the
deserted shaft. After the frigid air of the cage, the stairwell felt
like a sauna.</p>
<p class="western" style="margin-bottom: 0in">There was a cafeteria
on the top floor, with working toilets, water and coffee and vending
machine food. There was an uneasy queue of sysadmins before each. No
one met anyone’s eye. Felix wondered which one was Will and then he
joined the vending machine queue.</p>
<p class="western" style="margin-bottom: 0in">He got a couple more
energy bars and a gigantic cup of vanilla coffee before running out
of change. Van had scored them some table space and Felix set the
stuff down before him and got in the toilet line. “Just save some
for me,” he said, tossing an energy bar in front of Van.</p>
<p class="western" style="margin-bottom: 0in">By the time they were
all settled in, thoroughly evacuated, and eating, TALK NERDY and his
friend had returned again. They cleared off the cash-register at the
end of the food-prep area and TALK NERDY got up on it. Slowly the
conversation died down.</p>
<p class="western" style="margin-bottom: 0in">“I’m Uri Popovich,
this is Diego Rosenbaum. Thank you all for coming up here. Here’s
what we know for sure: the building’s been on generators for three
hours now. Visual observation indicates that we’re the only
building in central Toronto with working power—which should hold
out for three more days. There is a bioagent of unknown origin loose
beyond our doors. It kills quickly, within hours, and it is
aerosolized. You get it from breathing bad air. No one has opened any
of the exterior doors to this building since five this morning. No
one will open the doors until I give the go-ahead.</p>
<p class="western" style="margin-bottom: 0in">“Attacks on major
cities all over the world have left emergency responders in chaos.
The attacks are electronic, biological, nuclear and conventional
explosives, and they are very widespread. I’m a security engineer,
and where I come from, attacks in this kind of cluster are usually
viewed as opportunistic: group B blows up a bridge because everyone
is off taking care of group A’s dirty nuke event. It’s smart. An
Aum Shin Rikyo cell in Seoul gassed the subways there about 2AM
Eastern—that’s the earliest event we can locate, so it may have
been the Archduke that broke the camel’s back. We’re pretty sure
that Aum Shin Rikyo couldn’t be behind this kind of mayhem: they
have no history of infowar and have never shown the kind of
organizational acumen necessary to take out so many targets at once.
Basically, they’re not smart enough.</p>
<p class="western" style="margin-bottom: 0in">“We’re holing up
here for the foreseeable future, at least until the bioweapon has
been identified and dispersed. We’re going to staff the racks and
keep the networks up. This is critical infrastructure, and it’s our
job to make sure it’s got five nines of uptime. In times of
national emergency, our responsibility to do that doubles.”</p>
<p class="western" style="margin-bottom: 0in">One sysadmin put up his
hand. He was very daring in a green Incredible Hulk ring-tee, and he
was at the young end of the scale.</p>
<p class="western" style="margin-bottom: 0in">“Who died and made
you king?”</p>
<p class="western" style="margin-bottom: 0in">“I have controls for
the main security system, keys to every cage, and passcodes for the
exterior doors—they’re all locked now, by the way. I’m the one
who got everyone up here first and called the meeting. I don’t care
if someone else wants this job, it’s a shitty one. But someone
needs to have this job.”</p>
<p class="western" style="margin-bottom: 0in">“You’re right,”
the kid said. “And I can do it every bit as well as you. My name’s
Will Sario.”</p>
<p class="western" style="margin-bottom: 0in">Popovich looked down
his nose at the kid. “Well, if you’ll let me finish talking,
maybe I’ll hand things over to you when I’m done.”</p>
<p class="western" style="margin-bottom: 0in">“Finish, by all
means.” Sario turned his back on him and walked to the window. He
stared out of it intensely. Felix’s gaze was drawn to it, and he
saw that there were several oily smoke plumes rising up from the
city.</p>
<p class="western" style="margin-bottom: 0in">Popovich’s momentum
was broken. “So that’s what we’re going to do,” he said.</p>
<p class="western" style="margin-bottom: 0in">The kid looked around
after a stretched moment of silence. “Oh, is it my turn now?”</p>
<p class="western" style="margin-bottom: 0in">There was a round of
good-natured chuckling.</p>
<p class="western" style="margin-bottom: 0in">“Here’s what I
think: the world is going to shit. There are coordinated attacks on
every critical piece of infrastructure. There’s only one way that
those attacks could be so well coordinated: via the Internet. Even if
you buy the thesis that the attacks are all opportunistic, we need to
ask how an opportunistic attack could be organized in minutes: the
Internet.”</p>
<p class="western" style="margin-bottom: 0in">“So you think we
should shut down the Internet?” Popovich laughed a little, but
stopped when Sario said nothing.</p>
<p class="western" style="margin-bottom: 0in">“We saw an attack
last night that nearly killed the Internet. A little DoS on the
critical routers, a little DNS-foo, and down it goes like a
preacher’s daughter. Cops and the military are a bunch of
technophobic lusers, they hardly rely on the net at all. If we take
the Internet down, we’ll disproportionately disadvantage the
attackers, while only inconveniencing the defenders. When the time
comes, we can rebuild it.”</p>
<p class="western" style="margin-bottom: 0in">“You’re shitting
me,” Popovich said. His jaw literally hung open.</p>
<p class="western" style="margin-bottom: 0in">“It’s logical,”
Sario said. “Lots of people don’t like coping with logic when it
dictates hard decisions. That’s a problem with people, not logic.”</p>
<p class="western" style="margin-bottom: 0in">There was a buzz of
conversation that quickly turned into a roar.</p>
<p class="western" style="margin-bottom: 0in">“Shut UP!” Popovich
hollered. The conversation dimmed by one Watt. Popovich yelled again,
stamping his foot on the countertop. Finally there was a semblance of
order. “One at a time,” he said. He was flushed red, his hands in
his pockets.</p>
<p class="western" style="margin-bottom: 0in">One sysadmin was for
staying. Another for going. They should hide in the cages. They
should inventory their supplies and appoint a quartermaster. They
should go outside and find the police, or volunteer at hospitals.
They should appoint defenders to keep the front door secure.</p>
<p class="western" style="margin-bottom: 0in">Felix found to his
surprise that he had his hand in the air. Popovich called on him.</p>
<p class="western" style="margin-bottom: 0in">“My name is Felix
Tremont,” he said, getting up on one of the tables, drawing out his
PDA. “I want to read you something.</p>
<p class="western" style="margin-bottom: 0in">“‘Governments of
the Industrial World, you weary giants of flesh and steel, I come
from Cyberspace, the new home of Mind. On behalf of the future, I ask
you of the past to leave us alone. You are not welcome among us. You
have no sovereignty where we gather.</p>
<p class="western" style="margin-bottom: 0in">“‘We have no
elected government, nor are we likely to have one, so I address you
with no greater authority than that with which liberty itself always
speaks. I declare the global social space we are building to be
naturally independent of the tyrannies you seek to impose on us. You
have no moral right to rule us nor do you possess any methods of
enforcement we have true reason to fear.</p>
<p class="western" style="margin-bottom: 0in">“‘Governments
derive their just powers from the consent of the governed. You have
neither solicited nor received ours. We did not invite you. You do
not know us, nor do you know our world. Cyberspace does not lie
within your borders. Do not think that you can build it, as though it
were a public construction project. You cannot. It is an act of
nature and it grows itself through our collective actions.’</p>
<p class="western" style="margin-bottom: 0in">“That’s from the
Declaration of Independence of Cyberspace. It was written 12 years
ago. I thought it was one of the most beautiful things I’d ever
read. I wanted my kid to grow up in a world where cyberspace was
free—and where that freedom infected the real world, so meatspace
got freer too.</p>
<p class="western" style="margin-bottom: 0in">He swallowed hard and
scrubbed at his eyes with the back of his hand. Van awkwardly patted
him on the shoe.</p>
<p class="western" style="margin-bottom: 0in">“My beautiful son and
my beautiful wife died today. Millions more, too. The city is
literally in flames. Whole cities have disappeared from the map.”</p>
<p class="western" style="margin-bottom: 0in">He coughed up a sob and
swallowed it again.</p>
<p class="western" style="margin-bottom: 0in">“All around the
world, people like us are gathered in buildings like this. They were
trying to recover from last night’s worm when disaster struck. We
have independent power. Food. Water.</p>
<p class="western" style="margin-bottom: 0in">“We have the network,
that the bad guys use so well and that the good guys have never
figured out.</p>
<p class="western" style="margin-bottom: 0in">“We have a shared
love of liberty that comes from caring about and caring for the
network. We are in charge of the most important organizational and
governmental tool the world has ever seen. We are the closest thing
to a government the world has right now. Geneva is a crater. The East
River is on fire and the UN is evacuated.</p>
<p class="western" style="margin-bottom: 0in">“The Distributed
Republic of Cyberspace weathered this storm basically unscathed. We
are the custodians of a deathless, monstrous, wonderful machine, one
with the potential to rebuild a better world.</p>
<p class="western" style="margin-bottom: 0in">“I have nothing to
live for but that.”</p>
<p class="western" style="margin-bottom: 0in">There were tears in
Van’s eyes. He wasn’t the only one. They didn’t applaud him,
but they did one better. They maintained respectful, total silence
for seconds that stretched to a minute.</p>
<p class="western" style="margin-bottom: 0in">“How do we do it?”
Popovich said, without a trace of sarcasm.</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">The newsgroups were
filling up fast. They’d announced them in
news.admin.net-abuse.email, where all the spamfighters hung out, and
where there was a tight culture of camaraderie in the face of
full-out attack.</p>
<p class="western" style="margin-bottom: 0in">The new group was
alt.november5-disaster.recovery, with .recovery.governance,
.recovery.finance, .recovery.logistics and .recovery.defense hanging
off of it. Bless the wooly alt. hierarchy and all those who sail in
her.</p>
<p class="western" style="margin-bottom: 0in">The sysadmins came out
of the woodwork. The Googleplex was online, with the stalwart Queen
Kong bossing a gang of rollerbladed grunts who wheeled through the
gigantic data-center swapping out dead boxen and hitting reboot
switches. The Internet Archive was offline in the Presidio, but the
mirror in Amsterdam was live and they’d redirected the DNS so that
you’d hardly know the difference. Amazon was down. Paypal was up.
Blogger, Typepad and Livejournal were all up, and filling with
millions of posts from scared survivors huddling together for
electronic warmth.</p>
<p class="western" style="margin-bottom: 0in">The Flickr photostreams
were horrific. Felix had to unsubscribe from them after he caught a
photo of a woman and a baby, dead in a kitchen, twisted into an
agonized heiroglyph by the bioagent. They didn’t look like Kelly
and 2.0, but they didn’t have to. He started shaking and couldn’t
stop.</p>
<p class="western" style="margin-bottom: 0in">Wikipedia was up, but
limping under load. The spam poured in as though nothing had changed.
Worms roamed the network.</p>
<p class="western" style="margin-bottom: 0in">.recovery.logistics was
where most of the action was.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
We can use the newsgroup voting mechanism to hold regional </font>
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
elections</font></p>
<p class="western" style="margin-bottom: 0in">Felix knew that this
would work. Usenet newsgroup votes had been running for more than
twenty years without a substantial hitch.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
We’ll elect regional representatives and they’ll pick a Prime
Minister.</font></p>
<p class="western" style="margin-bottom: 0in">The Americans insisted
on President, which Felix didn’t like. Seemed too partisan. His
future wouldn’t be the American future. The American future had
gone up with the White House. He was building a bigger tent than
that.</p>
<p class="western" style="margin-bottom: 0in">There were French
sysadmins online from France Telecom. The EBU’s data-center had
been spared in the attacks that hammered Geneva, and it was filled
with wry Germans whose English was better than Felix’s. They got on
well with the remains of the BBC team in Canary Wharf.</p>
<p class="western" style="margin-bottom: 0in">They spoke polyglot
English in .recovery.logistics, and Felix had momentum on his side.
Some of the admins were cooling out the inevitable stupid flamewars
with the practice of long years. Some were chipping in useful
suggestions.</p>
<p class="western" style="margin-bottom: 0in">Surprisingly few
thought that Felix was off his rocker.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
I think we should hold elections as soon as possible. Tomorrow at the
latest. We can’t rule justly without the consent of the governed.</font></p>
<p class="western" style="margin-bottom: 0in">Within seconds the
reply landed in his inbox.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
You can’t be serious. Consent of the governed? Unless I miss my
guess, most of the people you’re proposing to govern are puking
their guts out, hiding under their desks, or wandering shell-shocked
through the city streets. When do THEY get a vote?</font></p>
<p class="western" style="margin-bottom: 0in">Felix had to admit she
had a point. Queen Kong was sharp. Not many woman sysadmins, and that
was a genuine tragedy. Women like Queen Kong were too good to exclude
from the field. He’d have to hack a solution to get women balanced
out in his new government. Require each region to elect one woman and
one man?</p>
<p class="western" style="margin-bottom: 0in">He happily clattered
into argument with her. The elections would be the next day; he’d
see to it.</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">“Prime Minister of
Cyberspace? Why not call yourself the Grand Poobah of the Global Data
Network? It’s more dignified, sounds cooler and it’ll get you
just as far.” Will had the sleeping spot next to him, up in the
cafeteria, with Van on the other side. The room smelled like a
dingleberry: twenty-five sysadmins who hadn’t washed in at least a
day all crammed into the same room. For some of them, it had been
much, much longer than a day.</p>
<p class="western" style="margin-bottom: 0in">“Shut up, Will,”
Van said. “You wanted to try to knock the Internet offline.”</p>
<p class="western" style="margin-bottom: 0in">“Correction: I <i>want</i>
to knock the Internet offline. Present-tense”</p>
<p class="western" style="margin-bottom: 0in">Felix cracked one eye.
He was so tired, it was like lifting weights.</p>
<p class="western" style="margin-bottom: 0in">“Look, Sario—if you
don’t like my platform, put one of your own forward. There are
plenty of people who think I’m full of shit and I respect them for
that, since they’re all running opposite me or backing someone who
is. That’s your choice. What’s not on the menu is nagging and
complaining. Bedtime now, or get up and post your platform.”</p>
<p class="western" style="margin-bottom: 0in">Sario sat up slowly,
unrolling the jacket he had been using for a pillow and putting it
on. “Screw you guys, I’m out of here.”</p>
<p class="western" style="margin-bottom: 0in">“I thought he’d
never leave,” Felix said and turned over, lying awake a long time,
thinking about the election.</p>
<p class="western" style="margin-bottom: 0in">There were other people
in the running. Some of them weren’t even sysadmins. A US Senator
on retreat at his summer place in Wyoming had generator power and a
satellite phone. Somehow he’d found the right newsgroup and thrown
his hat into the ring. Some anarchist hackers in Italy strafed the
group all night long, posting broken-English screeds about the
political bankruptcy of “governance” in the new world. Felix
looked at their netblock and determined that they were probably holed
up in a small Interaction Design institute near Turin. Italy had been
hit very bad, but out in the small town, this cell of anarchists had
taken up residence.</p>
<p class="western" style="margin-bottom: 0in">A surprising number
were running on a platform of shutting down the Internet. Felix had
his doubts about whether this was even possible, but he thought he
understood the impulse to finish the work and the world. Why not?</p>
<p class="western" style="margin-bottom: 0in">He fell asleep thinking
about the logistics of shutting down the Internet, and dreamed bad
dreams in which he was the network’s sole defender.</p>
<p class="western" style="margin-bottom: 0in">He woke to a papery,
itchy sound. He rolled over and saw that Van was sitting up, his
jacket balled up in his lap, vigorously scratching his skinny arms.
They’d gone the color of corned beef, and had a scaly look. In the
light streaming through the cafeteria windows, skin motes floated and
danced in great clouds.</p>
<p class="western" style="margin-bottom: 0in">“What are you doing?”
Felix sat up. Watching Van’s fingernails rip into his skin made him
itch in sympathy. It had been three days since he’d last washed his
hair and his scalp sometimes felt like there were little egg-laying
insects picking their way through it. He’d adjusted his glasses the
night before and had touched the back of his ears; his finger came
away shining with thick sebum. He got blackheads in the backs of his
ears when he didn’t shower for a couple days, and sometimes
gigantic, deep boils that Kelly finally popped with sick relish.</p>
<p class="western" style="margin-bottom: 0in">“Scratching,” Van
said. He went to work on his head, sending a cloud of dandruff-crud
into the sky, there to join the scurf that he’d already eliminated
from his extremeties. “Christ, I itch all over.”</p>
<p class="western" style="margin-bottom: 0in">Felix took Mayor
McCheese from Van’s backpack and plugged it into one of the
Ethernet cables that snaked all over the floor. He googled everything
he could think of that could be related to this. “Itchy” yielded
40,600,000 links. He tried compound queries and got slightly more
discriminating links.</p>
<p class="western" style="margin-bottom: 0in">“I think it’s
stress-related excema,” Felix said, finally.</p>
<p class="western" style="margin-bottom: 0in">“I don’t get
excema,” Van said.</p>
<p class="western" style="margin-bottom: 0in">Felix showed him some
lurid photos of red, angry skin flaked with white. “Stress-related
excema,” he said, reading the caption.</p>
<p class="western" style="margin-bottom: 0in">Van examined his arms.
“I have excema,” he said.</p>
<p class="western" style="margin-bottom: 0in">“Says here to keep it
moisturized and to try cortisone cream. You might try the first aid
kit in the second-floor toilets. I think I saw some there.” Like
all of the sysadmins, Felix had had a bit of a rummage around the
offices, bathrooms, kitchen and store-rooms, squirreling away a roll
of toilet-paper in his shoulder-bag along with three or four
power-bars. They were sharing out the food in the caf by unspoken
agreement, every sysadmin watching every other for signs of gluttony
and hoarding. All were convinced that there was hoarding and gluttony
going on out of eyeshot, because all were guilty of it themselves
when no one else was watching.</p>
<p class="western" style="margin-bottom: 0in">Van got up and when his
face hove into the light, Felix saw how puffed his eyes were. “I’ll
post to the mailing-list for some antihistamine,” Felix said. There
had been four mailing lists and three wikis for the survivors in the
building within hours of the first meeting’s close, and in the
intervening days they’d settled on just one. Felix was still on a
little mailing list with five of his most trusted friends, two of
whom were trapped in cages in other countries. He suspected that the
rest of the sysadmins were doing the same.</p>
<p class="western" style="margin-bottom: 0in">Van stumbled off. “Good
luck on the elections,” he said, patting Felix on the shoulder.</p>
<p class="western" style="margin-bottom: 0in">Felix stood and paced,
stopping to stare out the grubby windows. The fires still burned in
Toronto, more than before. He’d tried to find mailing lists or
blogs that Torontonians were posting to, but the only ones he’d
found were being run by other geeks in other data-centers. It was
possible—likely, even—that there were survivors out there who had
more pressing priorities than posting to the Internet. His home phone
still worked about half the time but he’d stopped calling it after
the second day, when hearing Kelly’s voice on the voicemail for the
fiftieth time had made him cry in the middle of a planning meeting.
He wasn’t the only one.</p>
<p class="western" style="margin-bottom: 0in">Election day. Time to
face the music.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Are you nervous?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Nope,</font></p>
<p class="western" style="margin-bottom: 0in">Felix typed.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
I don’t much care if I win, to be honest. I”m just glad we’re
doing this. The alternative was sitting around with our thumbs up our
ass, waiting for someone to crack up and open the door.</font></p>
<p class="western" style="margin-bottom: 0in">The cursor hung. Queen
Kong was very high latency as she bossed her gang of Googloids around
the Googleplex, doing everything she could to keep her data center
online. Three of the offshore cages had gone offline and two of their
six redundant network links were smoked. Lucky for her,
queries-per-second were way down.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
There’s still China</font></p>
<p class="western" style="margin-bottom: 0in">she typed. Queen Kong
had a big board with a map of the world colored in
Google-queries-per-second, and could do magic with it, showing the
drop-off over time in colorful charts. She’d uploaded lots of video
clips showing how the plague and the bombs had swept the world: the
initial upswell of queries from people wanting to find out what was
going on, then the grim, precipitous shelving off as the plagues took
hold.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
China’s still running about ninety percent nominal.</font></p>
<p class="western" style="margin-bottom: 0in">Felix shook his head.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
You can’t think that they’re responsible</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
No</font></p>
<p class="western" style="margin-bottom: 0in">She typed, but then she
started to key something and then stopped.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
No of course not. I believe the Popovich Hypothesis. This is a bunch
of assholes all using the rest for cover. But China put them down
harder and faster than anyone else. Maybe we’ve finally found a use
for totalitarian states.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">Felix
couldn’t resist. He typed:</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
You’re lucky your boss can’t see you type that. You guys were
pretty enthusiastic participants in the Great Firewall of China.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Wasn’t my idea</font></p>
<p class="western" style="margin-bottom: 0in">she typed.</p>
<p class="western" style="margin-bottom: 0in">&gt; And my boss is
<font face="Monaco">dead. They’re probably all dead. The whole Bay
Area got hit hard, and then there was the quake</font>.</p>
<p class="western" style="margin-bottom: 0in">They’d watched the
USGS’s automated data-stream from the 6.9 that trashed northern Cal
from Gilroy to Sebastopol. Soma webcams revealed the scope of the
damage—gas main explosions, seismically retrofitted buildings
crumpling like piles of children’s blocks after a good kicking. The
Googleplex, floating on a series of gigantic steel springs, had shook
like a plateful of jello, but the racks had stayed in place and the
worst injury they’d had was a badly bruised eye on a sysadmin who’d
caught a flying cable-crimper in the face.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Sorry. I forgot.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
It’s OK. We all lost people, right?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Yeah. Yeah. Anyway, I’m not worried about the election. Whoever
wins, at least we’re doing SOMETHING</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Not if they vote for one of the fuckrags</font></p>
<p class="western" style="margin-bottom: 0in">Fuckrag was the epithet
that some of the sysadmins were using to describe the contingent that
wanted to shut down the Internet. Queen Kong had coined it—apparently
it had started life as a catch-all term to describe the clueless IT
managers that she’d chewed up through her career.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
They won’t. They’re just tired and sad is all. Your endorsement
will carry the day</font></p>
<p class="western" style="margin-bottom: 0in">The Googloids were one
of the largest and most powerful blocs left behind, along with the
satellite uplink crews and the remaining transoceanic crews. Queen
Kong’s endorsement had come as a surprise and he’d sent her an
email that she’d replied to tersely: “can’t have the fuckrags
in charge.”</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
gtg</font></p>
<p class="western" style="margin-bottom: 0in">she typed and then her
connection dropped. He fired up a browser and called up google.com.
The browser timed out. He hit reload, and then again, and then the
Google front-page came back up. Whatever had hit Queen Kong’s
workplace—power failure, worms, another quake—she had fixed it.
He snorted when he saw that they’d replaced the O’s in the Google
logo with little planet Earths with mushroom clouds rising from them.</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">“Got anything to
eat?” Van said to him. It was mid-afternoon, not that time
particularly passed in the data-center. Felix patted his pockets.
They’d put a quartermaster in charge, but not before everyone had
snagged some chow out of the machines. He’d had a dozen power-bars
and some apples. He’d taken a couple sandwiches but had wisely
eaten them first before they got stale.</p>
<p class="western" style="margin-bottom: 0in">“One power-bar left,”
he said. He’d noticed a certain looseness in his waistline that
morning and had briefly relished it. Then he’d remembered Kelly’s
teasing about his weight and he’d cried some. Then he’d eaten two
power bars, leaving him with just one left.</p>
<p class="western" style="margin-bottom: 0in">“Oh,” Van said. His
face was hollower than ever, his shoulders sloping in on his
toast-rack chest.</p>
<p class="western" style="margin-bottom: 0in">“Here,” Felix said.
“Vote Felix.”</p>
<p class="western" style="margin-bottom: 0in">Van took the power-bar
from him and then put it down on the table. “OK, I want to give
this back to you and say, ‘No, I couldn’t,’ but I’m fucking
<i>hungry</i>, so I’m just going to take it and eat it, OK?”</p>
<p class="western" style="margin-bottom: 0in">“That’s fine by
me,” Felix said. “Enjoy.”</p>
<p class="western" style="margin-bottom: 0in">“How are the
elections coming?” Van said, once he’d licked the wrapper clean.</p>
<p class="western" style="margin-bottom: 0in">“Dunno,” Felix
said. “Haven’t checked in a while.” He’d been winning by a
slim margin a few hours before. Not having his laptop was a major
handicap when it came to stuff like this. Up in the cages, there were
a dozen more like him, poor bastards who’d left the house on Der
Tag without thinking to snag something WiFi-enabled.</p>
<p class="western" style="margin-bottom: 0in">“You’re going to
get smoked,” Sario said, sliding in next to them. He’d become
famous in the center for never sleeping, for eavesdropping, for
picking fights in RL that had the ill-considered heat of a Usenet
flamewar. “The winner will be someone who understands a couple of
fundamental facts.” He held up a fist, then ticked off his bullet
points by raising a finger at a time. “Point: The terrorists are
using the Internet to destroy the world, and we need to destroy the
Internet first. Point: Even if I’m wrong, the whole thing is a
joke. We’ll run out of generator-fuel soon enough. Point: Or if we
don’t, it will be because the old world will be back and running,
and it won’t give a crap about your new world. Point: We’re gonna
run out of food before we run out of shit to argue about or reasons
not to go outside. We have the chance to do something to help the
world recover: we can kill the net and cut it off as a tool for bad
guys. Or we can rearrange some more deck chairs on the bridge of your
personal Titanic in the service of some sweet dream about an
‘independent cyberspace.’”</p>
<p class="western" style="margin-bottom: 0in">The thing was that
Sario was right. They would be out of fuel in two days—intermittent
power from the grid had stretched their generator lifespan. And if
you bought his hypothesis that the Internet was primarily being used
as a tool to organize more mayhem, shutting it down would be the
right thing to do.</p>
<p class="western" style="margin-bottom: 0in">But Felix’s daughter
and his wife were dead. He didn’t want to rebuild the old world. He
wanted a new one. The old world was one that didn’t have any place
for him. Not anymore.</p>
<p class="western" style="margin-bottom: 0in">Van scratched his raw,
flaking skin. Puffs of dander and scruff swirled in the musty, greasy
air. Sario curled a lip at him. “That is disgusting. We’re
breathing recycled air, you know. Whatever leprosy is eating you,
aerosolizing it into the air supply is pretty anti-social.”</p>
<p class="western" style="margin-bottom: 0in">“You’re the world’s
leading authority on anti-social, Sario,” Van said. "Go away
or I’ll multi-tool you to death.” He stopped scratching and
patted his sheathed multi-pliers like a gunslinger.</p>
<p class="western" style="margin-bottom: 0in">“Yeah, I’m
anti-social. I’ve got Asperger’s and I haven’t taken any meds
in four days. What’s your fucking excuse.”</p>
<p class="western" style="margin-bottom: 0in">Van scratched some
more. “I’m sorry,” he said. “I didn’t know.”</p>
<p class="western" style="margin-bottom: 0in">Sario cracked up. “Oh,
you are priceless. I’d bet that three quarters of this bunch is
borderline autistic. Me, I’m just an asshole. But I’m one who
isn’t afraid to tell the truth, and that makes me better than you,
dickweed.”</p>
<p class="western" style="margin-bottom: 0in">“Fuckrag,” Felix
said, “fuck off.”</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">They had less than a
day’s worth of fuel when Felix was elected the first ever Prime
Minister of Cyberspace. The first count was spoiled by a bot that
spammed the voting process and they lost a critical day while they
added up the votes a second time.</p>
<p class="western" style="margin-bottom: 0in">But by then, it was all
seeming like more of a joke. Half the data-centers had gone dark.
Queen Kong’s net-maps of Google queries were looking grimmer and
grimmer as more of the world went offline, though she maintained a
leader-board of new and rising queries—largely related to health,
shelter, sanitation and self-defense.</p>
<p class="western" style="margin-bottom: 0in">Worm-load slowed. Power
was going off to many home PC users, and staying off, so their
compromised PCs were going dark. The backbones were still lit up and
blinking, but the missives from those data-centers were looking more
and more desperate. Felix hadn’t eaten in a day and neither had
anyone in a satellite Earth-station of transoceanic head-end.</p>
<p class="western" style="margin-bottom: 0in">Water was running
short, too.</p>
<p class="western" style="margin-bottom: 0in">Popovich and Rosenbaum
came and got him before he could do more than answer a few
congratulatory messages and post a canned acceptance speech to
newsgroups.</p>
<p class="western" style="margin-bottom: 0in">“We’re going to
open the doors,” Popovich said. Like all of them, he’d lost
weight and waxed scruffy and oily. His BO was like a cloud coming off
a trash-bag behind a fish-market on a sunny day. Felix was quite sure
he smelled no better.</p>
<p class="western" style="margin-bottom: 0in">“You’re going to go
for a reccy? Get more fuel? We can charter a working group for
it—great idea.”</p>
<p class="western" style="margin-bottom: 0in">Rosenbaum shook his
head sadly. “We’re going to go find our families. Whatever is out
there has burned itself out. Or it hasn’t. Either way, there’s no
future in here.”</p>
<p class="western" style="margin-bottom: 0in">“What about network
maintenance?” Felix said, though he knew the answers. “Who’ll
keep the routers up?”</p>
<p class="western" style="margin-bottom: 0in">“We’ll give you the
root passwords to everything,” Popovich said. His hands were
shaking and his eyes were bleary. Like many of the smokers stuck in
the data-center, he’d gone cold turkey this week. They’d run out
of caffeine products two days earlier, too. The smokers had it rough.</p>
<p class="western" style="margin-bottom: 0in">“And I’ll just stay
here and keep everything online?”</p>
<p class="western" style="margin-bottom: 0in">“You and anyone else
who cares anymore.”</p>
<p class="western" style="margin-bottom: 0in">Felix knew that he’d
squandered his opportunity. The election had seemed noble and brave,
but in hindsight all it had been was an excuse for infighting when
they should have been figuring out what to do next. The problem was
that there was nothing to do next.</p>
<p class="western" style="margin-bottom: 0in">“I can’t make you
stay,” he said.</p>
<p class="western" style="margin-bottom: 0in">“Yeah, you can’t.”
Popovich turned on his heel and walked out. Rosenbaum watched him go,
then he gripped Felix’s shoulder and squeezed it.</p>
<p class="western" style="margin-bottom: 0in">“Thank you, Felix. It
was a beautiful dream. It still is. Maybe we’ll find something to
eat and some fuel and come back.”</p>
<p class="western" style="margin-bottom: 0in">Rosenbaum had a sister
whom he’d been in contact with over IM for the first days after the
crisis broke. Then she’d stopped answering. The sysadmins were
split among those who’d had a chance to say goodbye and those who
hadn’t. Each was sure the other had it better.</p>
<p class="western" style="margin-bottom: 0in">They posted about it on
the internal newsgroup—they were still geeks, after all, and there
was a little honor guard on the ground floor, geeks who watched them
pass toward the double doors. They manipulated the keypads and the
steel shutters lifted, then the first set of doors opened. They
stepped into the vestibule and pulled the doors shut behind them. The
front doors opened. It was very bright and sunny outside, and apart
from how empty it was, it looked very normal. Heartbreakingly so.</p>
<p class="western" style="margin-bottom: 0in">The two took a
tentative step out into the world. Then another. They turned to wave
at the assembled masses. Then they both grabbed their throats and
began to jerk and twitch, crumpling in a heap on the ground.</p>
<p class="western" style="margin-bottom: 0in">“Shiii—!” was all
Felix managed to choke out before they both dusted themselves off and
stood up, laughing so hard they were clutching their sides. They
waved once more and turned on their heels.</p>
<p class="western" style="margin-bottom: 0in">“Man, those guys are
sick,” Van said. He scratched his arms, which had long, bloody
scratches on them. His clothes were so covered in scurf they looked
like they’d been dusted with icing sugar.</p>
<p class="western" style="margin-bottom: 0in">“I thought it was
pretty funny,” Felix said. 
</p>
<p class="western" style="margin-bottom: 0in">“Christ I’m
hungry,” Van said, conversationally. 
</p>
<p class="western" style="margin-bottom: 0in">“Lucky for you, we’ve
got all the packets we can eat,” Felix said.</p>
<p class="western" style="margin-bottom: 0in">“You’re too good to
us grunts, Mr President,” Van said. 
</p>
<p class="western" style="margin-bottom: 0in">“Prime Minister,”
he said. “And you’re no grunt, you’re the Deputy Prime
Minister. You’re my designated ribbon-cutter and hander-out of
oversized novelty checks.”</p>
<p class="western" style="margin-bottom: 0in">It buoyed both of their
spirits. Watching Popovich and Rosenbaum go, it buoyed them up. Felix
knew then that they’d all be going soon.</p>
<p class="western" style="margin-bottom: 0in">That had been
pre-ordained by the fuel-supply, but who wanted to wait for the fuel
to run out, anyway?</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
half my crew split this morning</font></p>
<p class="western" style="margin-bottom: 0in">Queen Kong typed.
Google was holding up pretty good anyway, of course. The load on the
servers was a lot lighter than it had been since the days when Google
fit on a bunch of hand-built PCs under a desk at Stanford. 
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
we’re down to a quarter</font></p>
<p class="western" style="margin-bottom: 0in">Felix typed back. It
was only a day since Popovich and Rosenbaum left, but the traffic on
the newsgroups had fallen down to near zero. He and Van hadn’t had
much time to play Republic of Cyberspace. They’d been too busy
learning the systems that Popovich had turned over to them, the big,
big routers that had went on acting as the major interchange for all
the network backbones in Canada. 
</p>
<p class="western" style="margin-bottom: 0in">Still, someone posted
to the newsgroups every now and again, generally to say goodbye. The
old flamewars about who would be PM, or whether they would shut down
the network, or who took too much food—it was all gone. 
</p>
<p class="western" style="margin-bottom: 0in">He reloaded the
newsgroup. There was a typical message.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Runaway processes on Solaris </font>
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
</font>
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Uh, hi. I’m just a lightweight MSCE but I’m the only one awake
here and four of the DSLAMs just went down. Looks like there’s some
custom accounting code that’s trying to figure out how much to bill
our corporate customers and it’s spawned ten thousand threads and
its eating all the swap. I just want to kill it but I can’t seem to
do that. Is there some magic invocation I need to do to get this
goddamned weenix box to kill this shit? I mean, it’s not as if any
of our customers are ever going to pay us again. I’d ask the guy
who wrote this code, but he’s pretty much dead as far as anyone can
work out.</font></p>
<p class="western" style="margin-bottom: 0in">He reloaded. There was
a response. It was short, authoritative, and helpful—just the sort
of thing you almost never saw in a high-caliber newsgroup when a noob
posted a dumb question. The apocalypse had awoken the spirit of
patient helpfulness in the world’s sysop community. 
</p>
<p class="western" style="margin-bottom: 0in">Van shoulder-surfed
him. “Holy shit, who knew he had it in him?”</p>
<p class="western" style="margin-bottom: 0in">He looked at the
message again. It was from Will Sario. 
</p>
<p class="western" style="margin-bottom: 0in">He dropped into his
chat window. 
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
sario i thought you wanted the network dead why are you helping msces
fix their boxen?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
&lt;sheepish grin&gt; Gee Mr PM, maybe I just can’t bear to watch a
computer suffer at the hands of an amateur. </font>
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">He
flipped to the channel with Queen Kong in it.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
How long?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Since I slept? Two days. Until we run out of fuel? Three days. Since
we ran out of food? Two days.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Jeez. I didn’t sleep last night either. We’re a little short
handed around here.</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
asl? Im monica and I live in pasadena and Im bored with my homework.
WOuld you like to download my pic???</font></p>
<p class="western" style="margin-bottom: 0in">The trojan bots were
all over IRC these days, jumping to every channel that had any
traffic on it. Sometimes you caught five or six flirting with each
other. It was pretty weird to watch a piece of malware try to con
another instance of itself into downloading a trojan. 
</p>
<p class="western" style="margin-bottom: 0in">They both kicked the
bot off the channel simultaneously. He had a script for it now. The
spam hadn’t even tailed off a little. 
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
How come the spam isn’t reducing? Half the goddamned data-centers
have gone dark</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">Queen
Kong paused a long time before typing. As had become automatic when
she went high-latency, he reloaded the Google homepage. Sure enough,
it was down. </font>
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Sario, you got any food?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
You won’t miss a couple more meals, Your Excellency</font></p>
<p class="western" style="margin-bottom: 0in">Van had gone back to
Mayor McCheese but he was in the same channel.</p>
<p class="western" style="margin-bottom: 0in">“What a dick. You’re
looking pretty buff, though, dude.”</p>
<p class="western" style="margin-bottom: 0in">Van didn’t look so
good. He looked like you could knock him over with a stiff breeze and
he had a phlegmy, weak quality to his speech. 
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
hey kong everything ok?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
everything’s fine just had to go kick some ass</font></p>
<p class="western" style="margin-bottom: 0in">“How’s the traffic,
Van?”</p>
<p class="western" style="margin-bottom: 0in">“Down 25 percent from
this morning,” he said. There were a bunch of nodes whose
connections routed through them. Presumably most of these were home
or commercial customers is places where the power was still on and
the phone company’s COs were still alive. 
</p>
<p class="western" style="margin-bottom: 0in">Every once in a while,
Felix would wiretap the connections to see if he could find a person
who had news of the wide world. Almost all of it was automated
traffic, though: network backups, status updates. Spam. Lots of spam.</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Spam’s still up because the services that stop spam are failing
faster than the services that create it. All the anti-worm stuff is
centralized in a couple places. The bad stuff is on a million zombie
computers. If only the lusers had had the good sense to turn off
their home PCs before keeling over or taking off</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
at the rate were going well be routing nothing but spam by dinnertime</font></p>
<p class="western" style="margin-bottom: 0in">Van cleared his throat,
a painful sound. “About that,” he said. “I think it’s going
to hit sooner than that. Felix, I don’t think anyone would notice
if we just walked away from here.”</p>
<p class="western" style="margin-bottom: 0in">Felix looked at him,
his skin the color of corned-beef and streaked with long, angry
scabs. His fingers trembled.</p>
<p class="western" style="margin-bottom: 0in">“You drinking enough
water?”</p>
<p class="western" style="margin-bottom: 0in">Van nodded. “All
frigging day, every ten seconds. Anything to keep my belly full.”
He pointed to a refilled Pepsi Max bottle full of water by his side.</p>
<p class="western" style="margin-bottom: 0in">“Let’s have a
meeting,” he said.</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">There had been
forty-three of them on D-Day. Now there were fifteen. Six had
responded to the call for a meeting by simply leaving. Everyone knew
without having to be told what the meeting was about.</p>
<p class="western" style="margin-bottom: 0in">“So that’s it,
you’re going to let it all fall apart?” Sario was the only one
with the energy left to get properly angry. He’d go angry to his
grave. The veins on his throat and forehead stood out angrily. His
fists shook angrily. All the other geeks went lids-down at the site
of him, looking up in unison for once at the discussion, not keeping
one eye on a chat-log or a tailed service log. 
</p>
<p class="western" style="margin-bottom: 0in">“Sario, you’ve got
to be shitting me,” Felix said. “You wanted to pull the goddamned
plug!”</p>
<p class="western" style="margin-bottom: 0in">“I wanted it to go
<i>clean</i>,” he shouted. “I didn’t want it to bleed out and
keel over in little gasps and pukes forever. I wanted it to be an act
of will by the global community of its caretakers. I wanted it to be
an affirmative act by human hands. Not entropy and bad code and worms
winning out. Fuck that, that’s just what’s happened out there.”</p>
<p class="western" style="margin-bottom: 0in">Up in the top-floor
cafeteria, there were windows all around, hardened and light-bending,
and by custom, they were all blinds-down. Now Sario ran around the
room, yanking down the blinds. <i>How the hell can he get the energy
to run?</i> Felix wondered. He could barely walk up the stairs to the
meeting room.</p>
<p class="western" style="margin-bottom: 0in">Harsh daylight flooded
in. It was a fine sunny day out there, but everywhere you looked
across that commanding view of Toronto’s skyline, there were rising
plumes of smoke. The TD tower, a gigantic black modernist glass
brick, was gouting flame to the sky. “It’s all falling apart, the
way everything does.</p>
<p class="western" style="margin-bottom: 0in">“Listen, listen. If
we leave the network to fall over slowly, parts of it will stay
online for months. Maybe years. And what will run on it? Malware.
Worms. Spam. System-processes. Zone transfers. The things we use fall
apart and require constant maintenance. The things we abandon don’t
get used and they last forever. We’re going to leave the network
behind like a lime-pit filled with industrial waste. That will be our
fucking legacy—the legacy of every keystroke you and I and anyone,
anywhere ever typed. You understand? We’re going to leave it to die
slow like a wounded dog, instead of giving it one clean shot through
the head.”</p>
<p class="western" style="margin-bottom: 0in">Van scratched his
cheeks, then Felix saw that he was wiping away tears.</p>
<p class="western" style="margin-bottom: 0in">“Sario, you’re not
wrong, but you’re not right either,” he said. “Leaving it up to
limp along is right. We’re going to all be limping for a long time,
and maybe it will be some use to someone. If there’s one packet
being routed from any user to any other user, anywhere in the world,
it’s doing it’s job.”</p>
<p class="western" style="margin-bottom: 0in">“If you want a clean
kill, you can do that,” Felix said. “I’m the PM and I say so.
I’m giving you root. All of you.” He turned to the white-board
where the cafeteria workers used to scrawl the day’s specials. Now
it was covered with the remnants of heated technical debates that the
sysadmins had engaged in over the days since the day. 
</p>
<p class="western" style="margin-bottom: 0in">He scrubbed away a
clean spot with his sleeve and began to write out long, complicated
alphanumeric passwords salted with punctuation. Felix had a gift for
remembering that kind of password. He doubted it would do him much
good, ever again.</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
Were going, kong. Fuels almost out anyway</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
yeah well thats right then. it was an honor, mr prime minister</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
you going to be ok?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
ive commandeered a young sysadmin to see to my feminine needs and
weve found another cache of food thatll last us a coupel weeks now
that were down to fifteen admins—im in hog heaven pal</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
youre amazing, Queen Kong, seriously. Dont be a hero though. When you
need to go go. Theres got to be something out there</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
be safe felix, seriously—btw did i tell you queries are up in
Romania? maybe theyre getting back on their feet</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
really?</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
yeah, really. we’re hard to kill—like fucking roaches</font></p>
<p class="western" style="margin-bottom: 0in">Her connection died. He
dropped to Firefox and reloaded Google and it was down. He hit reload
and hit reload and hit reload, but it didn’t come up. He closed his
eyes and listened to Van scratch his legs and then heard Van type a
little.</p>
<p class="western" style="margin-bottom: 0in">“They’re back up,”
he said.</p>
<p class="western" style="margin-bottom: 0in">Felix whooshed out a
breath. He sent the message to the newsgroup, one that he’d run
through five drafts before settling on, “Take care of the place,
OK? We’ll be back, someday.”</p>
<p class="western" style="margin-bottom: 0in">Everyone was going
except Sario. Sario wouldn’t leave. He came down to see them off,
though.</p>
<p class="western" style="margin-bottom: 0in">The sysadmins gathered
in the lobby and Felix made the safety door go up, and the light
rushed in. 
</p>
<p class="western" style="margin-bottom: 0in">Sario stuck his hand
out.</p>
<p class="western" style="margin-bottom: 0in">“Good luck,” he
said.</p>
<p class="western" style="margin-bottom: 0in">“You too,” Felix
said. He had a firm grip, Sario, stronger than he had any right to
be. “Maybe you were right,” he said. 
</p>
<p class="western" style="margin-bottom: 0in">“Maybe,” he said.</p>
<p class="western" style="margin-bottom: 0in">“You going to pull
the plug?”</p>
<p class="western" style="margin-bottom: 0in">Sario looked up at the
drop-ceiling, seeming to peer through the reinforced floors at the
humming racks above. “Who knows?” he said at last.</p>
<p class="western" style="margin-bottom: 0in">Van scratched and a
flurry of white motes danced in the sunlight.</p>
<p class="western" style="margin-bottom: 0in">“Let’s go find you
a pharmacy,” Felix said. He walked to the door and the other
sysadmins followed. 
</p>
<p class="western" style="margin-bottom: 0in">They waited for the
interior doors to close behind them and then Felix opened the
exterior doors. The air smelled and tasted like a mown grass, like
the first drops of rain, like the lake and the sky, like the outdoors
and the world, an old friend not heard from in an eternity.</p>
<p class="western" style="margin-bottom: 0in">“Bye, Felix,” the
other sysadmins said. They were drifting away while he stood
transfixed at the top of the short concrete staircase. The light hurt
his eyes and made them water.</p>
<p class="western" style="margin-bottom: 0in">“I think there’s a
Shopper’s Drug Mart on King Street,” he said to Van. “We’ll
thrown a brick through the window and get you some cortisone, OK?”</p>
<p class="western" style="margin-bottom: 0in">“You’re the Prime
Minister,” Van said. “Lead on.”</p>
<p class="western" style="margin-bottom: 0in" align="CENTER">#</p>
<p class="western" style="margin-bottom: 0in">They didn’t see a
single soul on the fifteen minute walk. There wasn’t a single sound
except for some bird noises and some distant groans, and the wind in
the electric cables overhead. It was like walking on the surface of
the moon.</p>
<p class="western" style="margin-bottom: 0in">“Bet they have
chocolate bars at the Shopper’s,” Van said.</p>
<p class="western" style="margin-bottom: 0in">Felix’s stomach
lurched. Food. “Wow,” he said, around a mouthful of saliva.</p>
<p class="western" style="margin-bottom: 0in">They walked past a
little hatchback and in the front seat was the dried body of a woman
holding the dried body of a baby, and his mouth filled with sour
bile, even though the smell was faint through the rolled-up windows.</p>
<p class="western" style="margin-bottom: 0in">He hadn’t thought of
Kelly or 2.0 in days. He dropped to his knees and retched again. Out
here in the real world, his family was dead. Everyone he knew was
dead. He just wanted to lie down on the sidewalk and wait to die,
too.</p>
<p class="western" style="margin-bottom: 0in">Van’s rough hands
slipped under his armpits and hauled weakly at him. “Not now,” he
said. “Once we’re safe inside somewhere and we’ve eaten
something, then and then you can do this, but not now. Understand me,
Felix? Not fucking now.”</p>
<p class="western" style="margin-bottom: 0in">The profanity got
through to him. He got to his feet. His knees were trembling. 
</p>
<p class="western" style="margin-bottom: 0in">“Just a block more,”
Van said, and slipped Felix’s arm around his shoulders and led him
along.</p>
<p class="western" style="margin-bottom: 0in">“Thank you, Van. I’m
sorry.”</p>
<p class="western" style="margin-bottom: 0in">“No sweat,” he
said. “You need a shower, bad. No offense.”</p>
<p class="western" style="margin-bottom: 0in">“None taken.”</p>
<p class="western" style="margin-bottom: 0in">The Shoppers had a
metal security gate, but it had been torn away from the front
windows, which had been rudely smashed. Felix and Van squeezed
through the gap and stepped into the dim drug-store. A few of the
displays were knocked over, but other than that, it looked OK. By the
cash-registers, Felix spotted the racks of candy bars at the same
instant that Van saw them, and they hurried over and grabbed a
handful each, stuffing their faces.</p>
<p class="western" style="margin-bottom: 0in">“You two eat like
pigs.”</p>
<p class="western" style="margin-bottom: 0in">They both whirled at
the sound of the woman’s voice. She was holding a fire-axe that was
nearly as big as she was. She wore a lab-coat and comfortable shoes.</p>
<p class="western" style="margin-bottom: 0in">“You take what you
need and go, OK? No sense in there being any trouble.” Her chin was
pointy and her eyes were sharp. She looked to be in her forties. She
looked nothing like Kelly, which was good, because Felix felt like
running and giving her a hug as it was. Another person alive!</p>
<p class="western" style="margin-bottom: 0in">“Are you a doctor?”
Felix said. She was wearing scrubs under the coat, he saw.</p>
<p class="western" style="margin-bottom: 0in">“You going to go?”
She brandished the axe.</p>
<p class="western" style="margin-bottom: 0in">Felix held his hands
up. “Seriously, are you a doctor? A pharmacist?”</p>
<p class="western" style="margin-bottom: 0in">“I used to be a RN,
ten years ago. I’m mostly a Web-designer.”</p>
<p class="western" style="margin-bottom: 0in">“You’re shitting
me,” Felix said.</p>
<p class="western" style="margin-bottom: 0in">“Haven’t you ever
met a girl who knew about computers?”</p>
<p class="western" style="margin-bottom: 0in">“Actually, a friend
of mine who runs Google’s data-center is a girl. A woman, I mean.”</p>
<p class="western" style="margin-bottom: 0in">“You’re shitting
me,” she said. “A woman ran Google’s data-center?”</p>
<p class="western" style="margin-bottom: 0in">“Runs,” Felix said.
“It’s still online.”</p>
<p class="western" style="margin-bottom: 0in">“NFW,” she said.
She let the axe lower.</p>
<p class="western" style="margin-bottom: 0in">“Way. Have you got
any cortisone cream? I can tell you the story. My name’s Felix and
this is Van, who needs any anti-histamines you can spare.”</p>
<p class="western" style="margin-bottom: 0in">“I can spare? Felix
old pal, I have enough dope here to last a hundred years. This
stuff’s going to expire long before it runs out. But are you
telling me that the net’s still up?”</p>
<p class="western" style="margin-bottom: 0in">“It’s still up,”
he said. “Kind of. That’s what we’ve been doing all week.
Keeping it online. It might not last much longer, though.”</p>
<p class="western" style="margin-bottom: 0in">“No,” she said. “I
don’t suppose it would.” She set the axe down. “Have you got
anything to trade? I don’t need much, but I’ve been trying to
keep my spirits up by trading with the neighbors. It’s like playing
civilization.”</p>
<p class="western" style="margin-bottom: 0in">“You have neighbors?”</p>
<p class="western" style="margin-bottom: 0in">“At least ten,” she
said. “The people in the restaurant across the way make a pretty
good soup, even if most of the veg is canned. They cleaned me out of
Sterno, though.”</p>
<p class="western" style="margin-bottom: 0in">“You’ve got
neighbors and you trade with them?”</p>
<p class="western" style="margin-bottom: 0in">“Well, nominally.
It’d be pretty lonely without them. I’ve taken care of whatever
sniffles I could. Set a bone—broken wrist. Listen, do you want some
Wonder Bread and peanut butter? I have a ton of it. Your friend looks
like he could use a meal.”</p>
<p class="western" style="margin-bottom: 0in">“Yes please,” Van
said. “We don’t have anything to trade, but we’re both
committed workaholics looking to learn a trade. Could you use some
assistants?”</p>
<p class="western" style="margin-bottom: 0in">“Not really.” She
spun her axe on its head. “But I wouldn’t mind some company.”</p>
<p class="western" style="margin-bottom: 0in">They ate the sandwiches
and then some soup. The restaurant people brought it over and made
their manners at them, though Felix saw their noses wrinkle up and
ascertained that there was working plumbing in the back room. Van
went in to take a sponge bath and then he followed. 
</p>
<p class="western" style="margin-bottom: 0in">“None of us know what
to do,” the woman said. Her name was Rosa, and she had found them a
bottle of wine and some disposable plastic cups from the housewares
aisle. “I thought we’d have helicopters or tanks or even looters,
but it’s just quiet.”</p>
<p class="western" style="margin-bottom: 0in">“You seem to have
kept pretty quiet yourself,” Felix said.</p>
<p class="western" style="margin-bottom: 0in">“Didn’t want to
attract the wrong kind of attention.”</p>
<p class="western" style="margin-bottom: 0in">“You ever think that
maybe there’s a lot of people out there doing the same thing? Maybe
if we all get together we’ll come up with something to do.”</p>
<p class="western" style="margin-bottom: 0in">“Or maybe they’ll
cut our throats,” she said.</p>
<p class="western" style="margin-bottom: 0in">Van nodded. “She’s
got a point.”</p>
<p class="western" style="margin-bottom: 0in">Felix was on his feet.
“No way, we can’t think like that. Lady, we’re at a critical
juncture here. We can go down through negligence, dwindling away in
our hiding holes, or we can try to build something better.”</p>
<p class="western" style="margin-bottom: 0in">“Better?” She made
a rude noise.</p>
<p class="western" style="margin-bottom: 0in">“OK, not better.
Something though. Building something new is better than letting it
dwindle away. Christ, what are you going to do when you’ve read all
the magazines and eaten all the potato chips here?”</p>
<p class="western" style="margin-bottom: 0in">Rosa shook her head.
“Pretty talk,” she said. “But what the hell are we going to do,
anyway?”</p>
<p class="western" style="margin-bottom: 0in">“Something,” Felix
said. “We’re going to do something. Something is better than
nothing. We’re going to take this patch of the world where people
are talking to each other, and we’re going to expand it. We’re
going to find everyone we can and we’re going to take care of them
and they’re going to take care of us. We’ll probably fuck it up.
We’ll probably fail. I’d rather fail than give up, though.”</p>
<p class="western" style="margin-bottom: 0in">Van laughed. “Felix,
you are crazier than Sario, you know it?”</p>
<p class="western" style="margin-bottom: 0in">“We’re going to go
and drag him out, first thing tomorrow. He’s going to be a part of
this, too. Everyone will. Screw the end of the world. The world
doesn’t end. Humans aren’t the kind of things that have endings.”</p>
<p class="western" style="margin-bottom: 0in">Rosa shook her head
again, but she was smiling a little now. “And you’ll be what, the
Pope-Emperor of the World?”</p>
<p class="western" style="margin-bottom: 0in">“He prefers Prime
Minister,” Van said in a stagey whisper. The anti-histamines had
worked miracles on his skin, and it had faded from angry red to a
fine pink.</p>
<p class="western" style="margin-bottom: 0in">“You want to be
Minister of Health, Rosa?” he said. 
</p>
<p class="western" style="margin-bottom: 0in">“Boys,” she said.
“Playing games. How about this. I’ll help out however I can,
provided you never ask me to call you Prime Minister and you never
call me the Minister of Health?”</p>
<p class="western" style="margin-bottom: 0in">“It’s a deal,” he
said. 
</p>
<p class="western" style="margin-bottom: 0in">Van refilled their
glasses, upending the wine bottle to get the last few drops out. 
</p>
<p class="western" style="margin-bottom: 0in">The raised their
glasses. “To the world,” Felix said. “To humanity.” He
thought hard. “To rebuilding.”</p>
<p class="western" style="margin-bottom: 0in">“To anything,” Van
said.</p>
<p class="western" style="margin-bottom: 0in">“To anything,”
Felix said. “To everything.”</p>
<p class="western" style="margin-bottom: 0in">“To everything,”
Rosa said. 
</p>
<p class="western" style="margin-bottom: 0in">They drank. The next
day, they started to rebuild. And months later, they started over
again, when disagreements drove apart the fragile little group they’d
pulled together. And a year after that, they started over again. And
five years later, they started again. 
</p>
<p class="western" style="margin-bottom: 0in">Felix dug ditches and
salvaged cans and buried the dead. He planted and harvested. He fixed
some cars and learned to make biodiesel. Finally he fetched up in a
data-center for a little government—little governments came and
went, but this one was smart enough to want to keep records and
needed someone to keep everything running, and Van went with him.</p>
<p class="western" style="margin-bottom: 0in">They spent a lot of
time in chat rooms and sometimes they happened upon old friends from
the strange time they’d spent running the Distributed Republic of
Cyberspace, geeks who insisted on calling him PM, though no one in
the real world ever called him that anymore.</p>
<p class="western" style="margin-bottom: 0in">It wasn’t a good
life, most of the time. Felix’s wounds never healed, and neither
did most other people’s. There were lingering sicknesses and sudden
ones. Tragedy on tragedy. 
</p>
<p class="western" style="margin-bottom: 0in">But Felix liked his
data-center. There in the humming of the racks, he never felt like it
was the first days of a better nation, but he never felt like it was
the last days of one, either. 
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
go to bed, felix</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
soon, kong, soon—almost got this backup running</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
youre a junkie, dude. </font>
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
look whos talking</font></p>
<p class="western" style="margin-bottom: 0in">He reloaded the Google
homepage. Queen Kong had had it online for a couple years now. The Os
in Google changed all the time, whenever she got the urge. Today they
were little cartoon globes, one smiling the other frowning.</p>
<p class="western" style="margin-bottom: 0in">He looked at it for a
long time and dropped back into a terminal to check his backup. It
was running clean, for a change. The little government’s records
were safe. 
</p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
ok night night</font></p>
<p class="western" style="margin-bottom: 0in"><font face="Monaco">&gt;
take care</font></p>
<p class="western" style="margin-bottom: 0in">Van waved at him as he
creaked to the door, stretching out his back with a long series of
pops. 
</p>
<p class="western" style="margin-bottom: 0in">“Sleep well, boss,”
he said.</p>
<p class="western" style="margin-bottom: 0in">“Don’t stick around
here all night again,” Felix said. “You need your sleep, too.”</p>
<p class="western" style="margin-bottom: 0in">“You’re too good to
us grunts,” Van said, and went back to typing.</p>
<p class="western" style="margin-bottom: 0in">Felix went to the door
and walked out into the night. Behind him, the biodiesel generator
hummed and made its acrid fumes. The harvest moon was up, which he
loved. Tomorrow, he’d go back and fix another computer and fight
off entropy again. And why not? 
</p>
<p class="western" style="margin-bottom: 0in">It was what he did. He
was a sysadmin.</p>
<p class="western" style="margin-bottom: 0in">—</p>
<p class="western" style="margin-bottom: 0in"><i>Creative Commons
License Deed</i></p>
<p class="western" style="margin-bottom: 0in">Attribution-NonCommercial-ShareAlike
2.5</p>
<p class="western" style="margin-bottom: 0in">You are free:</p>
<p class="western" style="margin-bottom: 0in">* to Share—to copy,
distribute, display, and perform the work</p>
<p class="western" style="margin-bottom: 0in">* to Remix—to make
derivative works</p>
<p class="western" style="margin-bottom: 0in">Under the following
conditions:</p>
<p class="western" style="margin-bottom: 0in">* Attribution. You must
attribute the work in the manner specified by the author or licensor.</p>
<p class="western" style="margin-bottom: 0in">* Noncommercial. You
may not use this work for commercial purposes.</p>
<p class="western" style="margin-bottom: 0in">* Share Alike. If you
alter, transform, or build upon this work, you may distribute the
resulting work only under a license identical to this one.</p>
<p class="western" style="margin-bottom: 0in">* For any reuse or
distribution, you must make clear to others the license terms of this
work.</p>
<p class="western" style="margin-bottom: 0in">* Any of these
conditions can be waived if you get permission from the copyright
holder.</p>
<p class="western" style="margin-bottom: 0in">Disclaimer: Your fair
use and other rights are in no way affected by the above.</p>
<p class="western" style="margin-bottom: 0in">This is a
human-readable summary of the Legal Code (the full license):</p>
<p class="western" style="margin-bottom: 0in">http://creativecommons.org/licenses/by-nc-sa/2.5/legalcode</p>
<p class="western" style="margin-bottom: 0in">—</p>
<p class="western" style="margin-bottom: 0in"><i>Machine-readable
metadata (humans, ignore this):</i></p>
<p class="western" style="margin-bottom: 0in" align="CENTER">&lt;!—/Creative
Commons License—&gt;&lt;!—&lt;rdf:RDF
xmlns="http://web.resource.org/cc/"
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"&gt;</p>
<p class="western" style="margin-bottom: 0in">&lt;Work rdf:about=""&gt;</p>
<p class="western" style="margin-bottom: 0in">&lt;license
rdf:resource="http://creativecommons.org/licenses/by-nc-sa/2.5/"
/&gt;</p>
<p class="western" style="margin-bottom: 0in">&lt;dc:type
rdf:resource="http://purl.org/dc/dcmitype/Text" /&gt;</p>
<p class="western" style="margin-bottom: 0in">&lt;/Work&gt;</p>
<p class="western" style="margin-bottom: 0in">&lt;License
rdf:about="http://creativecommons.org/licenses/by-nc-sa/2.5/"&gt;&lt;permits
rdf:resource="http://web.resource.org/cc/Reproduction"/&gt;&lt;permits
rdf:resource="http://web.resource.org/cc/Distribution"/&gt;&lt;requires
rdf:resource="http://web.resource.org/cc/Notice"/&gt;&lt;requires
rdf:resource="http://web.resource.org/cc/Attribution"/&gt;&lt;prohibits
rdf:resource="http://web.resource.org/cc/CommercialUse"/&gt;&lt;permits
rdf:resource="http://web.resource.org/cc/DerivativeWorks"/&gt;&lt;requires
rdf:resource="http://web.resource.org/cc/ShareAlike"/&gt;&lt;/License&gt;&lt;/rdf:RDF&gt;—&gt;</p>