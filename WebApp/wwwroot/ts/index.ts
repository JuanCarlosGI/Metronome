﻿var beat1 = new BaseBeat("sounds/click.mp3");
beat1 = new TripletDividedBeat(beat1, "sounds/click.mp3");
beat1 = new PreciceSubdivision(beat1, "sounds/click.mp3", 0.5);

var beat2 = new BaseBeat("sounds/click.mp3");
beat2 = new PreciceSubdivision(beat2, "sounds/click.mp3", 0.5);
beat2 = new PreciceSubdivision(beat2, "sounds/click.mp3", 0.25);
beat2 = new PreciceSubdivision(beat2, "sounds/click.mp3", 0.75);

var metronome = new Metronome("metro", new IntervalRepeater(), [beat1, beat2]);