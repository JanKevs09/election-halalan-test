import { Avatar, Button, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import classes from "./Home.module.css";

const Home = (props) => {
  const { electionResult } = props;
  const [presidentialResult, setPresidentialResult] = useState([
    {
      key: "BBM",
      name: "Bongbong Marcos",
      totalVotes: 0,
      img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Ferdinand_R._Marcos_Jr_%28cropped%29.jpg",
    },
    {
      key: "LENI",
      name: "Leni Robredo",
      totalVotes: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_k87W0_Dqt_FQ5kXH1xrvJUjMgg4eie13A&s",
    },
  ]);

  const [vicePresidentialResult, setVicepresidentialResult] = useState([
    {
      key: "KIKO",
      name: "Kiko Pangilinan",
      totalVotes: 0,
      img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Senkikopangilinan.jpg",
    },
    {
      key: "SARAH",
      name: "Sara Duterte",
      totalVotes: 0,
      img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/VPSDPortrait_%28cropped%29_%283%29.jpg",
    },
  ]);

  const handleShowResult = () => {
    setPresidentialResult(
      presidentialResult.map((result) => {
        let tempTotalVote = 0;
        electionResult.map((perRegion) =>
          perRegion.province.map((perProvince) =>
            perProvince.cites.map((perCities) => {
              if (result.key === "BBM")
                tempTotalVote += perCities.vote_count.president.BBM;
              else {
                tempTotalVote += perCities.vote_count.president.LENI;
              }
            })
          )
        );

        return { ...result, totalVotes: tempTotalVote };
      })
    );

    setVicepresidentialResult(
      vicePresidentialResult.map((result) => {
        let tempTotalVote = 0;
        electionResult.map((perRegion) =>
          perRegion.province.map((perProvince) =>
            perProvince.cites.map((perCities) => {
              if (result.key === "KIKO")
                tempTotalVote += perCities.vote_count.vice_president.KIKO;
              else {
                tempTotalVote += perCities.vote_count.vice_president.SARA;
              }
            })
          )
        );

        return { ...result, totalVotes: tempTotalVote };
      })
    );
  };
  const handleShowReverse = () => {
    setPresidentialResult(
      presidentialResult.map((result) => {
        const tempName = result.name;
        const tempVoteCount = result.totalVotes;
        let reverseName = "";
        if (/\s/.test(tempName)) {
          const splitString = tempName.split(" ");
          const newName = splitString.map((newString) => {
            const middle = Math.floor(newString.length / 2);
            const firstHalf = newString
              .substr(0, middle)
              .split("")
              .reverse()
              .join("");
            const secondHalf = newString
              .substr(middle)
              .split("")
              .reverse()
              .join("");
            return firstHalf.concat(secondHalf);
          });
          reverseName = newName[0] + " " + newName[1];
        } else {
          const newName = tempName.map((newString) => {
            const middle = Math.floor(newString.length / 2);
            const firstHalf = newString
              .substr(0, middle)
              .split("")
              .reverse()
              .join("");
            const secondHalf = newString
              .substr(middle)
              .split("")
              .reverse()
              .join("");
            return firstHalf.concat(secondHalf);
          });

          reverseName = newName;
        }
        const middle = Math.floor(tempVoteCount.toString().length / 2);
        const firstHalfVote = tempVoteCount
          .toString()
          .substr(0, middle)
          .split("")
          .reverse()
          .join("");
        const secondHalfVote = tempVoteCount
          .toString()
          .substr(middle)
          .split("")
          .reverse()
          .join("");

        const reverseVote = firstHalfVote.concat(secondHalfVote);
        return { ...result, name: reverseName, totalVotes: reverseVote };
      })
    );

    setVicepresidentialResult(
      vicePresidentialResult.map((result) => {
        const tempName = result.name;
        const tempVoteCount = result.totalVotes;
        let reverseName = "";
        if (/\s/.test(tempName)) {
          const splitString = tempName.split(" ");
          const newName = splitString.map((newString) => {
            const middle = Math.floor(newString.length / 2);
            const firstHalf = newString
              .substr(0, middle)
              .split("")
              .reverse()
              .join("");
            const secondHalf = newString
              .substr(middle)
              .split("")
              .reverse()
              .join("");
            return firstHalf.concat(secondHalf);
          });
          reverseName = newName[0] + " " + newName[1];
        } else {
          const newName = tempName.map((newString) => {
            const middle = Math.floor(newString.length / 2);
            const firstHalf = newString
              .substr(0, middle)
              .split("")
              .reverse()
              .join("");
            const secondHalf = newString
              .substr(middle)
              .split("")
              .reverse()
              .join("");
            return firstHalf.concat(secondHalf);
          });

          reverseName = newName;
        }
        const middle = Math.floor(tempVoteCount.toString().length / 2);
        const firstHalfVote = tempVoteCount
          .toString()
          .substr(0, middle)
          .split("")
          .reverse()
          .join("");
        const secondHalfVote = tempVoteCount
          .toString()
          .substr(middle)
          .split("")
          .reverse()
          .join("");

        const reverseVote = firstHalfVote.concat(secondHalfVote);
        return { ...result, name: reverseName, totalVotes: reverseVote };
      })
    );
  };
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.mainContainer}>
        <div className={classes.groupContainer}>
          <Group>
            <Stack>
              <Text fz="xl" tt="uppercase" fw={700} c="dimmed">
                President
              </Text>
              {presidentialResult
                .sort(function (a, b) {
                  if (a.totalVotes > b.totalVotes) {
                    return -1;
                  }
                  if (a.totalVotes < b.totalVotes) {
                    return 1;
                  }
                  return 0;
                })
                .map((president) => (
                  <div className={classes.candidateContainer}>
                    <Group wrap="nowrap">
                      <Avatar src={president.img} size={94} radius="md" />
                      <div>
                        <Text fz="lg" fw={500} className={classes.name}>
                          {president.name}
                        </Text>

                        <Text fz="lg" fw={500} className={classes.name}>
                          {president.totalVotes}
                        </Text>
                      </div>
                    </Group>
                  </div>
                ))}
            </Stack>
          </Group>

          <Group>
            <Stack>
              <Text fz="xl" tt="uppercase" fw={700} c="dimmed">
                Vice President
              </Text>
              {vicePresidentialResult
                .sort(function (a, b) {
                  if (a.totalVotes > b.totalVotes) {
                    return -1;
                  }
                  if (a.totalVotes < b.totalVotes) {
                    return 1;
                  }
                  return 0;
                })
                .map((vicePresident) => (
                  <div className={classes.candidateContainer}>
                    <Group wrap="nowrap">
                      <Avatar src={vicePresident.img} size={94} radius="md" />
                      <div>
                        <Text fz="lg" fw={500} className={classes.name}>
                          {vicePresident.name}
                        </Text>

                        <Text fz="lg" fw={500} className={classes.name}>
                          {vicePresident.totalVotes}
                        </Text>
                      </div>
                    </Group>
                  </div>
                ))}
            </Stack>
          </Group>
          <Group>
            <Button
              onClick={() => handleShowResult()}
              style={{ background: "#1f3477" }}
            >
              Show Result
            </Button>
            <Button
              onClick={() => handleShowReverse()}
              style={{ background: "#1f3477" }}
            >
              Show Reverse
            </Button>
          </Group>
        </div>
      </div>
    </div>
  );
};

export default Home;
