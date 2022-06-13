import * as React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

function Home() {
  return (
    <ScrollView style={styles.pet}>
      <View>
        <Text style={styles.toppet}>Pet Care</Text>
        <Text style={styles.petsubtitle}>
          Helping you to take good care of your pets.
        </Text>
      </View>
      <View style={styles.home3grp}>
        <View style={styles.placeholderbig} />
        <ReactImage
          source={require('./assets/x45.png')}
          style={styles.homeimg}
        />
        <View style={styles.placeholderletter} />
        <ReactImage
          source={require('./assets/pawprintf75206ca.png')}
          style={styles.pawprinthome}
        />
        <Text style={styles.homegrp3info}>Pet Care Tips</Text>
      </View>
      <View style={styles.home3grp}>
        <View style={styles.placeholderbig} />
        <View style={styles.placeholderletter} />
        <ReactImage
          source={require('./assets/pawprint77785d18.png')}
          style={styles.pawprinthome}
        />
        <ReactImage
          source={require('./assets/istock1098033974.png')}
          style={styles.homeimg}
        />
        <Text style={styles.homegrp3info}>Pet Breeds</Text>
      </View>
      <View style={styles.home3grp}>
        <View style={styles.placeholderbig} />
        <View style={styles.placeholderletter} />
        <ReactImage
          source={require('./assets/pawprint6ece8c81.png')}
          style={styles.pawprinthome}
        />
        <ReactImage
          source={require('./assets/istock1199449447.png')}
          style={styles.homeimg}
        />
        <Text style={styles.homegrp3info}>Pet Trivia</Text>
      </View>
    </ScrollView>
  );
}

function Petcaretips() {
  return (
    <ScrollView style={styles.pet}>
      <View>
        <Text style={styles.toppet}>Pet Care Tips</Text>
        <View style={styles.group235}>
          <View style={styles.group235placeholder} />
          <View style={styles.group235pinkrectangle} />
          <ReactImage
            source={require('./assets/care.png')}
            style={styles.grp235img}
          />
          <Text style={styles.group235letter}>Pet Care Tips</Text>
        </View>
      </View>
      <View style={styles.cats}>
        <View style={styles.catinfoplaceholder} />
        <View style={styles.catplaceholder} />
        <Text style={styles.cattitle}>Cats</Text>
        <Text style={styles.cattips}>
          1. Brush Your Cat Every Day 2. Don’t Feed Your Cat Too Much Dry Food
          3. Pay Attention to Your Pet’s Thirst 4. Provide a Sufficient Number
          of Litter Boxes 5. Don’t Assume You Know Why a Cat Is Peeing Outside
          the Box 6. Train Your Cat to Use a Scratching Post 7. Spay or Neuter
          Your Cat 8. Travel Safely With Your Pet 9. Choose a Cat-Friendly Vet
          10. Let Them Show Off!
        </Text>
      </View>
      <View style={styles.petcaretips_dogs8551a503}>
        <View style={styles.petcaretips_dogs8551a503_rectangle27} />
        <View style={styles.catplaceholder} />
        <Text style={styles.cattitle}>Dogs</Text>
        <Text style={styles.dogtips}>
          1. Regular Exams are Vital. 2. Spay and Neuter Your Pets. 3. Prevent
          Parasites. 4. Maintain a Healthy Weight. 5. Get Regular Vaccinations.
          6. Provide an Enriched Environment. 7. Pets Need Dental Care, Too. 8.
          Provide a Protected and Clean Living Environment For Your Dog. 9.
          Always Keep Fresh Water Available. 10. Feed a Quality Diet and Prevent
          Obesity. 11. Have your Pet Examined by a Veterinarian on a Regular
          Basis. 12. Provide Ample Opportunities to Exercise. 13. Communicate
          with your Dog and Develop a Relationship. 14. Train your dog to Follow
          the Simple Commands. 15. Practice Reproductive Control. 16. Dental
          care is very important. 17. Don't Overlook Grooming and Nail Trimming.
        </Text>
      </View>
      <Text style={styles.petsubtitleforother}>
        Helping you to take good care of your pets by providing these simple
        tips!
      </Text>
    </ScrollView>
  );
}

function Pettrivia() {
  return (
    <ScrollView style={styles.pet}>
      <View>
        <Text style={styles.toppet}>Pet Trivia</Text>
      </View>
      <View style={styles.group235}>
        <View style={styles.group235placeholder} />
        <View style={styles.group235pinkrectangle} />
        <ReactImage
          source={require('./assets/trivia.png')}
          style={styles.grp235img}
        />
        <Text style={styles.group235letter}>Pet Trivia</Text>
      </View>
      <View style={styles.pettrivia_cat}>
        <View style={styles.pettrivia_cat_rectangle27a7d2b672} />
        <View style={styles.catplaceholder} />
        <Text style={styles.cattitle}>Cats</Text>
        <View style={styles.pettrivia_cat_cattrivia}>
          <Text style={styles.info}>
            1. Cats sleep for around 13 to 16 hours a day (70% of their life).
            Have you ever noticed that cats are always sleeping? They do this to
            save their energy. In the wild they would be saving their energy to
            go and hunt for their food. House cats obviously don’t need to do
            this but it just comes naturally to them. 2. In 1963 a cat went to
            space You’ve heard of monkeys and dogs in space, but did you know
            that a cat braved the great unknown too? On October 18th 1963
            Felicette, also known as ‘Astrocat’ was the first and only cat to go
            to space. 3. Ancient Egyptians would shave off their eyebrows when
            their cats died According to Ancient History Encyclopedia, Herodotus
            wrote in 440BC that when a pet cat died in Ancient Egyptian times
            the family members would shave off their eyebrows in mourning. Now
            that’s an interesting cat fact!
          </Text>
        </View>
      </View>
      <View style={styles.pettrivia_dog}>
        <View style={styles.pettrivia_dog_rectangle27} />
        <View style={styles.pettrivia_dog_rectangle28} />
        <Text style={styles.cattitle}>Dogs</Text>
        <View style={styles.pettrivia_dog_dogtrivia}>
          <Text style={styles.info}>
            1. Speaking of sleeping … all dogs dream, but puppies and senior
            dogs dream more frequently than adult dogs. 2. A dog’s sense of
            smell is legendary, but did you know that his nose has as many as
            300 million receptors? In comparison, a human nose has about 5
            million. 3. Dogs’ noses can sense heat/thermal radiation, which
            explains why blind or deaf dogs can still hunt.
          </Text>
        </View>
      </View>
      <Text style={styles.petsubtitleforother}>
        Interesting trivias about your pets that will amaze and help you to
        understand and love them more!{' '}
      </Text>
    </ScrollView>
  );
}

function Catbreeds() {
  return (
    <ScrollView style={styles.pet}>
      <View>
        <Text style={styles.toppet}>Pet Breeds</Text>
      </View>
      <Text style={styles.petsubtitleforother}>
        Become familiar with the breed of you furry friend!
      </Text>
      <View style={styles.allbreeds}>
        <View style={styles.mainecoongrp}>
          <Svg
            style={styles.maincoonplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 276.341552734375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 15.89651012420654 394 35.50585174560547 L 394 239.3357391357422 C 394 258.945068359375 381.9116821289062 274.8415832519531 367 274.8415832519531 L 27 274.8415832519531 C 12.08831119537354 274.8415832519531 0 258.945068359375 0 239.3357391357422 L 0 35.50585174560547 C 0 15.89651012420654 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Maine Coon</Text>
          <Text style={styles.maincooninfo}>
            The classic Maine coon coloration is a brown tabby, but this breed
            can come in almost any color. Breed Overview Height: Up to 16
            inches. Weight: 8 to 20 pounds.
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-mainecoon"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/mainecoon.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-mainecoon)"
            />
          </Svg>
        </View>
        <View style={styles.siamesegrp}>
          <Svg
            style={styles.siameseplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.75 288.3323974609375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 16.57558441162109 394 37.02260971069336 L 394 249.5597991943359 C 394 270.0068054199219 381.9116821289062 286.5823974609375 367 286.5823974609375 L 27 286.5823974609375 C 12.08831119537354 286.5823974609375 0 270.0068054199219 0 249.5597991943359 L 0 37.02260971069336 C 0 16.57558441162109 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Siamese</Text>
          <Text style={styles.siameseinfo}>
            Popular since the 19th century, this cat breed originated in
            Thailand (formerly known as Siam). The Siamese has been a
            foundational breed for the Oriental shorthair, sphynx, and
            Himalayan. Most Siamese cats have distinct markings called "points"
            that are the areas of coloration on their face, ears, feet, and
            tail.
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-siamese"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/siamese.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-siamese)"
            />
          </Svg>
        </View>
        <View style={styles.iranianshirazgrp}>
          <Svg
            style={styles.iranianshirazplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 508.931640625"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 29.3492374420166 394 65.55336761474609 L 394 441.8782653808594 C 394 478.0823974609375 381.9116821289062 507.431640625 367 507.431640625 L 27 507.431640625 C 12.08831119537354 507.431640625 0 478.0823974609375 0 441.8782653808594 L 0 65.55336761474609 C 0 29.3492374420166 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Iranian/Shiraz Cat</Text>
          <Text style={styles.iranianshirazinfo}>
            Also lovingly referred to as one of the "smushed-face" cats, the
            Iranian cat or Shiraz cat (named for a city in Iran), Persians have
            beautiful, long fur coats. They can come in almost any color and
            have a flat face when compared to most other breeds of cats.
            Persians are featured in many movies, artworks, and commercials and
            have been one of the most popular breeds of cats for decades HEIGHT:
            14 to 18 inches WEIGHT: 7 to 12 pounds COAT AND COLOR: Long coat in
            solid (white, black, cream), tabby, calico, bi-color, silver and
            gold, shaded, and smoke LIFE EXPECTANCY: 15 to 20 years
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-shiraz"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/shiraz.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-shiraz)"
            />
          </Svg>
        </View>
        <View style={styles.persiangrp}>
          <Svg
            style={styles.persianplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 210.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 12.08831119537354 394 27 L 394 182 C 394 196.9116821289062 381.9116821289062 209 367 209 L 27 209 C 12.08831119537354 209 0 196.9116821289062 0 182 L 0 27 C 0 12.08831119537354 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.persianinfo}>
            Persians are featured in many movies, artworks, and commercials and
            have been one of the most popular breeds of cats for decades.
          </Text>
          <Text style={styles.catbreedname}>Persian</Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-persian"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/persian.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-persian)"
            />
          </Svg>
        </View>
        <View style={styles.ragdolldgrp}>
          <Svg
            style={styles.ragdolldplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 506.37841796875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 29.20156669616699 394 65.22352600097656 L 394 439.6549072265625 C 394 475.6768188476562 381.9116821289062 504.87841796875 367 504.87841796875 L 27 504.87841796875 C 12.08831119537354 504.87841796875 0 475.6768188476562 0 439.6549072265625 L 0 65.22352600097656 C 0 29.20156669616699 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Ragdoll</Text>
          <Text style={styles.ragdollinfo}>
            Ragdoll cats get their name from their docile temperament. They tend
            to go limp when picked up, much like a rag doll. At one time, people
            thought they couldn’t feel pain, but that is not true. Ragdolls look
            a lot like long-haired Siamese cats with pointed color patterns.
            They also have distinctive blue eyes and dog-like personalities,
            following their owners around the house. HEIGHT: 11 to 13 inches
            WEIGHT: 15 to 20 pounds COAT AND COLOR: Medium-length and silky with
            many different colors and patterns with blue eyes LIFE EXPECTANCY:
            15 to 25 years
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-ragdoll"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/ragdoll.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-ragdoll)"
            />
          </Svg>
        </View>
        <View style={styles.bengalsgrp}>
          <Svg
            style={styles.bengalsplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490346297 395.5 553.237548828125"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034629735979e-06 L 223.488525390625 -1.649034629735979e-06 L 367 -1.649034629735979e-06 C 381.9116821289062 -1.649034629735979e-06 394 31.91184234619141 394 71.27709197998047 L 394 480.4604187011719 C 394 519.8256225585938 381.9116821289062 551.737548828125 367 551.737548828125 L 27 551.737548828125 C 12.08831119537354 551.737548828125 0 519.8256225585938 0 480.4604187011719 L 0 71.27709197998047 C 0 31.91184234619141 12.08831119537354 -1.649034629735979e-06 27 -1.649034629735979e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Bengal</Text>
          <Text style={styles.bengalsinfo}>
            Bengals are wild-looking cats—literally. Their markings make them
            look more like they belong in the jungle rather than in your home,
            but they are domesticated. They are talkative and require a lot of
            exercise. They come in many colors with patterns like spots and
            rosettes. Their name comes from the Asian leopard cat’s taxonomic
            name, Prionailurus bengalensis bengalensis. Bengals were initially
            bred from domestic cats and a wildcat. They also get their beautiful
            patterns from this wildcat. HEIGHT: 13 to 16 inches WEIGHT: 6 to 12
            pounds COAT AND COLOR: Shorthaired, spotted, or marbled coat with
            patterns in black, chocolate, or gray/silver with green or gold eyes
            LIFE EXPECTANCY: 12 to 15 years
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-bengal"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/bengal.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-bengal)"
            />
          </Svg>
        </View>
        <View style={styles.birmangrp}>
          <Svg
            style={styles.birmanplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490346297 395.5 534.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034629735979e-06 L 367 -1.649034629735979e-06 C 381.9116821289062 -1.649034629735979e-06 394 30.82808494567871 394 68.85645294189453 L 394 464.1435241699219 C 394 502.1718444824219 381.9116821289062 533 367 533 L 27 533 C 12.08831119537354 533 0 502.1718444824219 0 464.1435241699219 L 0 68.85645294189453 C 0 30.82808494567871 12.08831119537354 -1.649034629735979e-06 27 -1.649034629735979e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Birman</Text>
          <Text style={styles.birmaninfo}>
            Birmans are another color-pointed cat like the Siamese and ragdoll.
            They have blue eyes and a medium-long coat but no undercoat, the
            primary trait that sets them apart from Persians and Himalayans.
            Birmans were the original stock for breeding ragdolls, so they look
            very similar, but they have slightly different markings and
            personalities. They are fun, social cats that love attention—from
            their chosen person. They are more of a one-person cat than others.
            HEIGHT: 8 to 10 inches WEIGHT: 6 to 15 pounds COAT AND COLOR: Long
            and silky coat in seal, blue, red, chocolate, cream, and tortie
            colors, including standard or lynx pattern points and deep blue eyes
            LIFE EXPECTANCY: 15 to 20 years
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-birman"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/birman.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-birman)"
            />
          </Svg>
        </View>
        <View style={styles.orientalShorthairgrp}>
          <Svg
            style={styles.orientalShorthairplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490347434 395.5 502.65380859375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034743422817e-06 L 367 -1.649034743422817e-06 C 381.9116821289062 -1.649034743422817e-06 394 28.98614120483398 394 64.74235534667969 L 394 436.4114379882812 C 394 472.1675720214844 381.9116821289062 501.1538391113281 367 501.1538391113281 L 27 501.1538391113281 C 12.08831119537354 501.1538391113281 0 472.1675720214844 0 436.4114379882812 L 0 64.74235534667969 C 0 28.98614120483398 12.08831119537354 -1.649034743422817e-06 27 -1.649034743422817e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Oriental Shorthair</Text>
          <Text style={styles.orientalShorthairinfo}>
            At a glance, you may think this slender cat looks like a Siamese,
            but the Oriental shorthair is a separate breed. Unlike Siamese cats,
            they usually have green eyes and many color patterns and colors. The
            Oriental can also have long hair. Oriental shorthair cats are prone
            to skin cancer and getting cold due to their lack of fur; they are
            often seen wearing sweaters. HEIGHT: 9 to 11 inches WEIGHT: 7 to 12
            pounds COAT AND COLOR: Short, smooth coat with many color
            possibilities: solids, shaded, smoke, and tabby with green, blue,
            gold, and yellow eyes LIFE EXPECTANCY: 15 to 20 years
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-orientalshorthair"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/orientalshorthair.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-orientalshorthair)"
            />
          </Svg>
        </View>
        <View style={styles.sphynxgrp}>
          <Svg
            style={styles.sphynxplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490346297 395.5 460.61181640625"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034629735979e-06 L 367 -1.649034629735979e-06 C 381.9116821289062 -1.649034629735979e-06 394 26.55447959899902 394 59.31108474731445 L 394 399.8006896972656 C 394 432.5572204589844 381.9116821289062 459.11181640625 367 459.11181640625 L 27 459.11181640625 C 12.08831119537354 459.11181640625 0 432.5572204589844 0 399.8006896972656 L 0 59.31108474731445 C 0 26.55447959899902 12.08831119537354 -1.649034629735979e-06 27 -1.649034629735979e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Sphynx</Text>
          <Text style={styles.sphynxinfo}>
            If you are looking for a cat that doesn't shed, then the sphynx is
            for you. Sphynx cats look unique due to their lack of fur and are
            very social, active, dog-like felines. They look like they belong in
            the laps of royalty, but they are playful and goofy and act more
            like court jesters despite their regal appearance. HEIGHT: 8 to 10
            inches WEIGHT: 8 to 10 pounds COAT AND COLOR: Hairless with white,
            black, red, chocolate, lavender, tabby, tortoiseshell, calico,
            pointed, and mink colors LIFE EXPECTANCY: 15 to 20 years
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-sphynx"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/sphynx.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-sphynx)"
            />
          </Svg>
        </View>
        <View style={styles.devonrexgroup}>
          <Svg
            style={styles.devonRexplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490346297 395.5 408.630859375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034629735979e-06 L 367 -1.649034629735979e-06 C 381.9116821289062 -1.649034629735979e-06 394 23.54796409606934 394 52.59584426879883 L 394 354.5349731445312 C 394 383.5827941894531 381.9116821289062 407.130859375 367 407.130859375 L 27 407.130859375 C 12.08831119537354 407.130859375 0 383.5827941894531 0 354.5349731445312 L 0 52.59584426879883 C 0 23.54796409606934 12.08831119537354 -1.649034629735979e-06 27 -1.649034629735979e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Devon Rex</Text>
          <Text style={styles.devonrexinfo}>
            Devon rex cats have wavy, soft short hair and slender bodies with
            enormous ears. The Devon Rex is a playful, active cat described as
            "a monkey in a catsuit." This kitty will steal your heart with its
            lively, sweet disposition. They are also trainable and adept at
            learning tricks. HEIGHT: 10 to 12 inches WEIGHT: 7 to 12 pounds COAT
            AND COLOR: Short, fine, wavy coat in solid, tabby, and shaded
            varieties LIFE EXPECTANCY: 15 to 20 years
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-devonrex"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/devonrex.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-devonrex)"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.catbreedsfinal_group235}>
        <View style={styles.catbreedsfinal_group235_rectangle13} />
        <View style={styles.catbreedsfinal_group235_rectangle17} />
        <ReactImage
          source={require('./assets/catpic.png')}
          style={styles.catbreedsfinal_group235_image4}
        />
        <Text style={styles.catbreedsfinal_group235_catBreeds}>Cat Breeds</Text>
      </View>
    </ScrollView>
  );
}

function Dogbreeds() {
  return (
    <ScrollView style={styles.pet}>
      <Text style={styles.toppet}>Pet Breeds</Text>
      <View style={styles.group235}>
        <View style={styles.group235placeholder} />
        <View style={styles.group235pinkrectangle} />
        <ReactImage
          source={require('./assets/image4.png')}
          style={styles.grp235img}
        />
        <Text style={styles.group235letter}>Dog Breeds</Text>
      </View>
      <View style={styles.dogbreeds}>
        <View style={styles.rhodesiangrp}>
          <Svg
            style={styles.rhodesianplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 395.038818359375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 22.76182174682617 394 50.8399543762207 L 394 342.6989440917969 C 394 370.7770690917969 381.9116821289062 393.5388793945312 367 393.5388793945312 L 27 393.5388793945312 C 12.08831119537354 393.5388793945312 0 370.7770690917969 0 342.6989440917969 L 0 50.8399543762207 C 0 22.76182174682617 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.rhodesianinfo}>
            The Rhodesian ridgeback likely originated from Khoikhoi dogs native
            to southern Africa. When European settlers arrived in the 16th
            century, they bred their own dogs with these hunting dogs to create
            a breed that would fare well in extreme temperatures and be fiercely
            loyal. Dog Breed Group: Hound Dogs ; Height: 24 to 27 inches tall at
            the shoulder ; Weight: 70 to 85 pounds ; Life Span: 10 to 12 years
            Color: Red Wheaten, Light Wheaten, Wheaten
          </Text>
          <Text style={styles.catbreedname}>Rhodesian ridgeback</Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-rhodesian"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/rhodesian.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-rhodesian)"
            />
          </Svg>
        </View>
        <View style={styles.bichongrp}>
          <Svg
            style={styles.bichonplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 387.34637451171875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 22.31689453125 394 49.8461799621582 L 394 336.0001831054688 C 394 363.5294494628906 381.9116821289062 385.8463745117188 367 385.8463745117188 L 27 385.8463745117188 C 12.08831119537354 385.8463745117188 0 363.5294494628906 0 336.0001831054688 L 0 49.8461799621582 C 0 22.31689453125 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Bichon Frises</Text>
          <Text style={styles.bichoninfo}>
            Bichon Frises originated from the Bichon Tenerife, a breed named
            after a Spanish island. Historians have suggested that the dogs
            accompanied Spanish sailors during their travels and could have been
            used for bartering. Between the 14th and 15th centuries, Bichon
            Frises became wildly popular in Italy and France, especially among
            nobility and middle-class merchants Height: 9.5 to 11.5 inches.
            Coat: Curly, fluffy. Color: White. Life expectancy: 15+ years.
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-bichon"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/bichon.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-bichon)"
            />
          </Svg>
        </View>
        <View style={styles.belgiangrp}>
          <Svg
            style={styles.belgianplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 484.0823974609375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 27.9119930267334 394 62.34318161010742 L 394 420.2391967773438 C 394 454.6703491210938 381.9116821289062 482.5823974609375 367 482.5823974609375 L 27 482.5823974609375 C 12.08831119537354 482.5823974609375 0 454.6703491210938 0 420.2391967773438 L 0 62.34318161010742 C 0 27.9119930267334 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Belgian malinois</Text>
          <Text style={styles.belgianinfo}>
            Origins: Belgium As its name suggests, the Belgian malinois
            originated in the northwest region of Belgium, around the city of
            Malines. These dogs were first bred to be livestock herders and were
            the preferred dog breed for Belgian sheepherders and cattlemen. The
            Belgian Malinois is an enthusiastic and quick dog with a natural
            tendency to be in motion. Males are 24 to 26 inches tall and weigh
            55 to 75 pounds (25 to 34 kilograms). Females are 22 to 24 inches
            and weigh 40 to 60 pounds (18 to 27 kilograms). Color: fawn-colored,
            red, or brown
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-belgian"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/belgian.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-belgian)"
            />
          </Svg>
        </View>
        <View style={styles.colliesgrp}>
          <Svg
            style={styles.colliesplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 543.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 31.3486328125 394 70.01913452148438 L 394 471.9808959960938 C 394 510.6513671875 381.9116821289062 542 367 542 L 27 542 C 12.08831119537354 542 0 510.6513671875 0 471.9808959960938 L 0 70.01913452148438 C 0 31.3486328125 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Collies</Text>
          <Text style={styles.colliesinfo}>
            Origins: Great Britain While we know little about how collies came
            to exist, the breed was used as a sheepdog in the Scottish Highlands
            in the 18th century. Collies are more often associated with England:
            the breed rose to prominence south of Scotland after collies were
            featured at an 1860 dog show in Birmingham. Males stand 24 to 26
            inches tall; females are 22 to 24 inches tall. Collies weigh 50 to
            70 pounds. Life Span: 10-14 years Color: Sable and White, Mahogany
            Sable, Dark Mahogany Sable, Sable Headed White, Blue Merle, Blue
            Headed White, Sable Merle, Tri Sable Merle, Tri Color, Tri Headed
            White, White Factored, White Factored Broken Pattern
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-collies"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/collies.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-collies)"
            />
          </Svg>
        </View>
        <View style={styles.bassetgrp}>
          <Svg
            style={styles.bassetplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 395.5 518.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 0 L 367 0 C 381.9116821289062 0 394 29.90266609191895 394 66.78947448730469 L 394 450.2105407714844 C 394 487.0973205566406 381.9116821289062 517 367 517 L 27 517 C 12.08831119537354 517 0 487.0973205566406 0 450.2105407714844 L 0 66.78947448730469 C 0 29.90266609191895 12.08831119537354 0 27 0 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Basset Hound</Text>
          <Text style={styles.bassetinfo}>
            Origins: France and Belgium “Basset” comes from the French word for
            low, which makes sense given how the basset hound's ears and body
            hang low to the ground. The breed can trace its origins to France
            and Belgium, where many believe the friars at the Abbey of St.
            Hubert crossed strains of French breeds to create a dog that was
            close to the ground, so it could better track rabbit and deer.
            Weight Range: Male: 40-60 lbs. Female: 40-60 lbs. Height at Withers:
            Male: 14 in. Female: 13 in.
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-basset"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/basset.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-basset)"
            />
          </Svg>
        </View>
        <View style={styles.maltesegrp}>
          <Svg
            style={styles.malteseplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490346297 395.5 394.663818359375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034629735979e-06 L 367 -1.649034629735979e-06 C 381.9116821289062 -1.649034629735979e-06 394 22.74012756347656 394 50.79149627685547 L 394 342.372314453125 C 394 370.4236450195312 381.9116821289062 393.163818359375 367 393.163818359375 L 27 393.163818359375 C 12.08831119537354 393.163818359375 0 370.4236450195312 0 342.372314453125 L 0 50.79149627685547 C 0 22.74012756347656 12.08831119537354 -1.649034629735979e-06 27 -1.649034629735979e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Maltese</Text>
          <Text style={styles.malteseinfo}>
            Origins: Malta There are numerous theories about how the Maltese
            breed came to be. One speculates that these pip-squeak dogs are
            descended from a Swedish Spitz-type dog. Another posits that they
            originated from the Tibetan terriers of Asia. Height: 8 to 10 inches
            tall at the shoulder Weight: Up to 7 pounds Life Span: 12-15 years
            Color: White
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-maltese"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/maltese.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-maltese)"
            />
          </Svg>
        </View>
        <View style={styles.chihuahuagrp}>
          <Svg
            style={styles.chihuahuaplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490346297 395.5 444.5"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034629735979e-06 L 367 -1.649034629735979e-06 C 381.9116821289062 -1.649034629735979e-06 394 25.62259292602539 394 57.22965621948242 L 394 385.7703247070312 C 394 417.3773193359375 381.9116821289062 443 367 443 L 27 443 C 12.08831119537354 443 0 417.3773193359375 0 385.7703247070312 L 0 57.22965621948242 C 0 25.62259292602539 12.08831119537354 -1.649034629735979e-06 27 -1.649034629735979e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Chihuahua</Text>
          <Text style={styles.chihuahuainfo}>
            {' '}
            Origins: Chihuahua, Mexico As its name suggests, Chihuahuas were
            developed in the Chihuahua region of Mexico, the largest of the
            country's states. According to historians, American tourists took an
            interest in the tiny pup in the 1800s, often bringing the dogs back
            to the United States. Dog Breed Group: Companion Dogs ; Height: 6
            inches to 9 inches tall at the shoulder ; Weight: 3 to 6 pounds ;
            Life Span: 10 to 18 years. Color: black, black & tan, fawn, fawn &
            white, blue & tan, cream, chocolate, chocolate & tan, and red.
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-chihuahua"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/chihuahua.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-chihuahua)"
            />
          </Svg>
        </View>
        <View style={styles.vizslagrp}>
          <Svg
            style={styles.vizslaplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490346297 395.5 359.4267578125"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034629735979e-06 L 367 -1.649034629735979e-06 C 381.9116821289062 -1.649034629735979e-06 394 20.70205879211426 394 46.23933410644531 L 394 311.6873779296875 C 394 337.224609375 381.9116821289062 357.9267578125 367 357.9267578125 L 27 357.9267578125 C 12.08831119537354 357.9267578125 0 337.224609375 0 311.6873779296875 L 0 46.23933410644531 C 0 20.70205879211426 12.08831119537354 -1.649034629735979e-06 27 -1.649034629735979e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Vizsla</Text>
          <Text style={styles.vizslainfo}>
            Origins: Hungary Vizslas call Hungary home. There, they were
            originally the prized hunting dogs of the Magyar tribe in the 8th
            century. Historians have even found ancient stone etchings featuring
            Vizslas and their prey. The breed declined as the years wore on,
            however, and after World War II, when Russia occupied Hungary, many
            feared that the breed would be completely eradicated, since owning a
            Vizsla was a symbol of royalty.
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-vizsla"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/vizsla.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-vizsla)"
            />
          </Svg>
        </View>
        <View style={styles.bordergrp}>
          <Svg
            style={styles.bordeplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490347434 395.5 522.521484375"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034743422817e-06 L 367 -1.649034743422817e-06 C 381.9116821289062 -1.649034743422817e-06 394 30.1352653503418 394 67.30899047851562 L 394 453.7124938964844 C 394 490.8861389160156 381.9116821289062 521.021484375 367 521.021484375 L 27 521.021484375 C 12.08831119537354 521.021484375 0 490.8861389160156 0 453.7124938964844 L 0 67.30899047851562 C 0 30.1352653503418 12.08831119537354 -1.649034743422817e-06 27 -1.649034743422817e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}>Border collie</Text>
          <Text style={styles.borderinfo}>
            {' '}
            Origins: Great Britain The name of this breed comes from the fact
            that border collies were first developed on the border between
            England and Scotland, in an area called Northumberland. Border
            collies, which were originally used for herding sheep, were
            officially recognized as a breed in 1915 for the purpose of
            distinguishing the dogs from other collie breeds. height18 to 22
            inchesweight30 to 55 poundslife span12 to 15 yearsbreed sizemedium
            (26-60 lbs Color: Standard colors are black, blue, blue merle,
            brindle, gold, lilac, red, red merle, sable, sable merle, saddleback
            sable, white and black, white and blue, white and blue merle, white
            and red, white and red merle, and white ticked.
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="0 0 152 152"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-bordercollie"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/bordercollie.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-bordercollie)"
            />
          </Svg>
        </View>
        <View style={styles.mastiffgrp}>
          <Svg
            style={styles.mastiffplaceholder}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.7500016490347434 395.5 480.8857421875"
            fill="rgba(255, 255, 255, 1)">
            <SvgPath d="M 27 -1.649034743422817e-06 L 367 -1.649034743422817e-06 C 381.9116821289062 -1.649034743422817e-06 394 27.72710227966309 394 61.93021011352539 L 394 417.4555053710938 C 394 451.6585388183594 381.9116821289062 479.3857727050781 367 479.3857727050781 L 27 479.3857727050781 C 12.08831119537354 479.3857727050781 0 451.6585388183594 0 417.4555053710938 L 0 61.93021011352539 C 0 27.72710227966309 12.08831119537354 -1.649034743422817e-06 27 -1.649034743422817e-06 Z" />
          </Svg>
          <Text style={styles.catbreedname}> Mastiff</Text>
          <Text style={styles.mastiffinfo}>
            Origins: Great Britain The enormous mastiff has been popular around
            the world for centuries, but the dogs we know today—sometimes called
            “Old English mastiffs”—trace their roots back to Great Britain. When
            Julius Caesar invaded Great Britain in 55 B.C., he was reportedly
            taken aback by the size and strength of the mastiffs in the area and
            brought back several to Rome to fight wild beasts and gladiators.
            27.5-30+ inchesweight120-230 pounds life span6-10 years breed size
            extra large (101 lbs. or more Color: Brindle, Fawn, Apricot
          </Text>
          <Svg
            style={styles.catpiccircle}
            preserveAspectRatio="none"
            viewBox="-0.75 -0.75 153.5 153.5"
            fill="rgba(255, 255, 255, 0)">
            <Defs>
              <Pattern
                id="img-mastiff"
                patternContentUnits="userSpaceOnUse"
                width="100%"
                height="100%">
                <SvgImage
                  xlinkHref={require('./assets/mastiff.png')}
                  x="0"
                  y="0"
                  width="152.00px"
                  height="152.00px"
                />
              </Pattern>
            </Defs>
            <SvgPath
              d="M 76 0 C 117.9736328125 0 152 34.02636337280273 152 76 C 152 117.9736328125 117.9736328125 152 76 152 C 34.02636337280273 152 0 117.9736328125 0 76 C 0 34.02636337280273 34.02636337280273 0 76 0 Z"
              fill="url(#img-mastiff)"
            />
          </Svg>
        </View>
      </View>
      <Text style={styles.petsubtitleforother}>
        Become familiar with the breed of you furry friend!
      </Text>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        //headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          // backgroundColor: '#4E0D81',
          // bottom: '1%',
          borderRadius: 1,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tips" component={Petcaretips} />
      <Tab.Screen name="Trivia" component={Pettrivia} />
      <Tab.Screen name="Cat Breeds" component={Catbreeds} />
      <Tab.Screen name="Dog Breeds" component={Dogbreeds} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  pet: {
    backgroundColor: 'rgba(244, 244, 250, 1)',
    width: 'auto',
    height: 'auto',
  },
  toppet: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(53, 10, 102, 1)',
    fontSize: 42,
    fontWeight: '700',
    fontFamily: 'Product Sans',
    textAlign: 'left',
    height: 51,
    left: 128.01,
    top: 8,
  },
  petsubtitle: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(89, 84, 154, 1)',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    marginTop: -20,
    height: 40,
    top: '50%',
  },
  petsubtitleforother: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(89, 84, 154, 1)',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Source Sans Pro',
    textAlign: 'center',
    width: 160,
    height: 134,
    top: 110,
    right: 10,
  },
  group235: {
    width: 170,
    height: 200,
    left: 17,
    top: 15,
  },
  group235placeholder: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowColor: 'rgb(21, 9, 111)',
    shadowOffset: {
      height: 6,
    },
    shadowRadius: 6,
    width: 170,
    height: 200,
  },
  group235pinkrectangle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 115, 171, 1)',
    borderRadius: 4,
    width: 105,
    height: 24,
    left: 47,
    bottom: 15,
    top: 164,
  },
  grp235img: {
    position: 'absolute',
    borderRadius: 87,
    width: 137,
    height: 141,
    left: 16,
    top: 15,
  },
  group235letter: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(53, 10, 102, 1)',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Product Sans',
    textAlign: 'left',
    height: 18,
    left: 65,
    bottom: 15,
  },
  home3grp: {
    width: '95%',
    height: 170,
    left: '5%',
  },
  placeholderbig: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 115, 171, 1)',
    borderWidth: 3,
    borderColor: 'rgba(78, 13, 129, 1)',
    borderRadius: 17,
    width: '95%',
    height: 134,
    top: 38,
  },
  homeimg: {
    position: 'absolute',
    borderBottomRightRadius: 17,
    width: 132,
    height: 'auto',
    top: 0,
    right: '5%',
    bottom: 1,
  },
  placeholderletter: {
    position: 'absolute',
    backgroundColor: 'rgba(244, 244, 250, 1)',
    borderWidth: 1,
    borderColor: 'rgba(57, 10, 107, 1)',
    borderRadius: 15,
    width: '50%',
    height: 38,
    top: 86,
    left: '6%',
  },
  pawprinthome: {
    position: 'absolute',
    width: 29,
    height: 25,
    top: 92,
    left: '7%',
  },
  homegrp3info: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(53, 10, 102, 1)',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Product Sans',
    top: 93,
    left: '20%',
  },
  cats: {
    width: '90%',
    height: 372,
    left: '5%',
    top: 30,
  },
  catinfoplaceholder: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 347,
    left: 0,
    right: 0,
    bottom: 0,
  },
  catplaceholder: {
    backgroundColor: 'rgba(78, 13, 129, 1)',
    borderRadius: 15,
    width: '35%',
    height: 49,
  },
  cattitle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 30,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'left',
    left: '9%',
    top: 6,
  },
  cattips: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 59,
  },
  petcaretips_dogs8551a503: {
    left: '5%',
    width: '90%',
    height: 710,
    top: 50,
  },
  petcaretips_dogs8551a503_rectangle27: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 115, 171, 1)',
    borderRadius: 27,
    width: '100%',
    height: 373,
    top: 25,
  },
  dogtips: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 57,
  },
  pettriviasmall: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(53, 10, 102, 1)',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Product Sans',
    textAlign: 'left',
    height: 18,
    left: 60,
    top: 165,
  },
  pettrivia_cat: {
    width: '95%',
    height: 476,
    left: '5%',
    top: 30,
  },
  pettrivia_cat_rectangle27a7d2b672: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 115, 171, 1)',
    borderRadius: 27,
    width: '95%',
    height: 400,
    top: 25,
  },
  pettrivia_cat_cattrivia: {
    position: 'absolute',
    width: 353,
    height: 723,
    left: 21,
    top: 53,
  },
  pettrivia_dog: {
    left: '5%',
    width: '95%',
    height: 776,
    top: 20,
  },
  pettrivia_dog_rectangle27: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 115, 171, 1)',
    borderRadius: 27,
    width: '95%',
    height: 373,
    top: 25,
  },
  pettrivia_dog_rectangle28: {
    position: 'absolute',
    backgroundColor: 'rgba(78, 13, 129, 1)',
    borderRadius: 15,
    width: '35%',
    height: 49,
  },
  pettrivia_dog_dogtrivia: {
    width: '95%',
    height: 330,
    left: 21,
    top: 57,
  },
  info: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: 300,
  },
  allbreeds: {
    width: '95%',
    height: 5500,
    left: '5%',
    right: '5%',
    top: 250,
  },
  mainecoongrp: {
    position: 'absolute',
    width: '95%',
    height: 360,
  },
  maincoonplaceholder: {
    height: 274,
    top: 76,
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
  },
  catbreedname: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Product Sans',
    textAlign: 'center',
    left: 148,
    top: 162,
  },
  maincooninfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 194,
  },
  catpiccircle: {
    position: 'absolute',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'rgba(255, 115, 171, 1)',
    width: 152,
    height: 152,
    left: '30%',
  },
  siamesegrp: {
    position: 'absolute',
    height: 463,
    top: 670,
    width: '95%',
  },
  siameseplaceholder: {
    height: 290.08,
    top: 74.92,
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
  },
  siameseinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 202,
  },
  iranianshirazgrp: {
    position: 'absolute',
    width: '95%',
    height: 583.43,
    top: 1050,
  },
  iranianshirazplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 507.43,
    top: 76,
  },
  iranianshirazinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 210,
  },
  persiangrp: {
    position: 'absolute',
    width: '95%',
    height: 285,
    top: 368,
  },
  persianplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 211,
    top: 75,
  },
  persianinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 188,
  },
  ragdolldgrp: {
    position: 'absolute',
    width: '95%',
    height: 580.88,
    top: 1651,
  },
  ragdolldplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 504.88,
    top: 76,
  },
  ragdollinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 210,
  },
  bengalsgrp: {
    position: 'absolute',
    width: '95%',
    height: 627,
    top: 2249,
  },
  bengalsplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 551,
    top: 76,
  },
  bengals: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Product Sans',
    textAlign: 'center',
    width: 56,
    height: 22,
    left: 169,
    top: 171,
  },
  bengalsinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 212,
  },
  birmangrp: {
    position: 'absolute',
    width: '95%',
    height: 609,
    top: 2895,
  },
  birmanplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 533,
    top: 76,
  },
  birmaninfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 194,
  },
  orientalShorthairgrp: {
    position: 'absolute',
    width: '95%',
    height: 577.15,
    top: 3521,
  },
  orientalShorthairplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 501.15,
    top: 76,
  },
  orientalShorthairinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 208,
  },
  sphynxgrp: {
    position: 'absolute',
    width: '95%',
    height: 535.11,
    top: 4116,
  },
  sphynxplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 459.11,
    top: 76,
  },
  sphynxinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 198,
  },
  devonrexgroup: {
    position: 'absolute',
    width: '95%',
    height: 483.35,
    top: 4663,
  },
  devonRexplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 407.13,
    top: 76.22,
  },
  devonrexinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 188.44,
  },
  dogbreeds: {
    width: '95%',
    left: '5%',
    right: '5%',
    height: 5600,
    top: 75,
  },
  rhodesiangrp: {
    position: 'absolute',
    width: '95%',
    height: 469.54,
    top: 480,
  },
  rhodesianplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 393.54,
    top: 76,
  },
  rhodesianinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 205,
  },
  bichongrp: {
    position: 'absolute',
    width: '95%',
    height: 461.85,
  },
  bichonplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 385.85,
    top: 76,
  },
  bichoninfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    height: 250,
    top: 200,
    left: '5%',
  },
  belgiangrp: {
    position: 'absolute',
    width: '95%',
    height: 558.58,
    top: 967.69,
  },
  belgianplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 482.58,
    top: 76,
  },
  belgianinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 211.58,
  },
  colliesgrp: {
    position: 'absolute',
    width: '95%',
    height: 618,
    top: 1544.43,
  },
  colliesplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 542,
    top: 76,
  },
  colliesinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 206,
  },
  bassetgrp: {
    position: 'absolute',
    width: '95%',
    height: 593,
    top: 2182,
  },
  bassetplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 517,
    top: 76,
  },
  bassetinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 204,
  },
  maltesegrp: {
    position: 'absolute',
    width: '95%',
    height: 469.16,
    top: 2794.57,
  },
  malteseplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 393.16,
    top: 76,
  },
  malteseinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 204,
  },
  chihuahuagrp: {
    position: 'absolute',
    width: '95%',
    height: 519,
    top: 3283.31,
  },
  chihuahuaplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 443,
    top: 76,
  },
  chihuahuainfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 195,
  },
  vizslagrp: {
    position: 'absolute',
    width: '95%',
    height: 433.93,
    top: 3821.88,
  },
  vizslaplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 357.93,
    top: 76,
  },
  vizslainfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 190,
  },
  bordergrp: {
    position: 'absolute',
    width: '95%',
    height: 597.47,
    top: 4275.38,
  },
  bordeplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 521.02,
    top: 76.44,
  },
  borderinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 202.44,
  },
  mastiffgrp: {
    position: 'absolute',
    width: '95%',
    height: 555.61,
    top: 4892.41,
  },
  mastiffplaceholder: {
    borderWidth: 1,
    borderRadius: 27,
    borderColor: 'rgba(255, 115, 171, 1)',
    height: 479.39,
    top: 76.22,
  },
  mastiffinfo: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(78, 13, 129, 1)',
    fontSize: 18,
    fontWeight: '400',
    fontFamily: 'Product Sans',
    textAlign: 'justify',
    width: '90%',
    left: '5%',
    top: 202.44,
  },

  catbreedsfinal_group235: {
    position: 'absolute',
    width: 170,
    height: 200,
    left: 17,
    top: 68,
  },
  catbreedsfinal_group235_rectangle13: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    shadowColor: 'rgb(21, 9, 111)',
    shadowOffset: {
      height: 6,
    },
    shadowRadius: 6,
    width: 170,
    height: 200,
  },
  catbreedsfinal_group235_rectangle17: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 115, 171, 1)',
    borderRadius: 4,
    width: 105,
    height: 24.58,
    left: 32.5,
    top: 166.42,
  },
  catbreedsfinal_group235_image4: {
    position: 'absolute',
    borderRadius: 87,
    width: 137,
    height: 141,
    left: 16.5,
    bottom: 44,
  },
  catbreedsfinal_group235_catBreeds: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(53, 10, 102, 1)',
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'Product Sans',
    textAlign: 'left',
    width: 76,
    height: 18,
    left: 47,
    top: 169.71,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
