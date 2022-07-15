//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Vote{

    uint uid;
    uint cid;

    struct User{
        uint uid;
        string name;
        uint age;
        address user;
    }

    struct Candidate{
        uint cid;
        string name;
        string party_name;
        address Candidate;
    }

    mapping(address => mapping(uint => User)) voter;
    mapping(address => mapping(uint => Candidate)) candidate;
    mapping(uint => Candidate) candidate_list;

    function receiveUid() external view returns(uint) {
        return uid;
    }

    function receiveCid() external view returns(uint) {
        return cid;
    }

    function userregister(string memory _name,uint _age) external{
        ++uid;
        voter[msg.sender][uid] = User(uid,_name,_age,msg.sender);
    }

    function candidateregister(string memory _name, string memory _party_name) external{
        ++cid;
        candidate[msg.sender][cid] = Candidate(cid,_name,_party_name,msg.sender);
        candidate_list[cid] = Candidate(cid,_name,_party_name,msg.sender);
    }
}