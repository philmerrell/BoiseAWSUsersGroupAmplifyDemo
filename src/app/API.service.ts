/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateVenueInput = {
  id?: string | null;
  name: string;
  address: string;
};

export type ModelVenueConditionInput = {
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelVenueConditionInput | null> | null;
  or?: Array<ModelVenueConditionInput | null> | null;
  not?: ModelVenueConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateVenueInput = {
  id: string;
  name?: string | null;
  address?: string | null;
};

export type DeleteVenueInput = {
  id?: string | null;
};

export type CreateArtistInput = {
  id?: string | null;
  name: string;
  description: string;
  image: string;
  genres?: Array<GenreInput | null> | null;
};

export type GenreInput = {
  id: string;
  name: string;
};

export type ModelArtistConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelArtistConditionInput | null> | null;
  or?: Array<ModelArtistConditionInput | null> | null;
  not?: ModelArtistConditionInput | null;
};

export type UpdateArtistInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  image?: string | null;
  genres?: Array<GenreInput | null> | null;
};

export type DeleteArtistInput = {
  id?: string | null;
};

export type CreatePerformanceInput = {
  id?: string | null;
  when: string;
  performanceVenueId?: string | null;
  performanceArtistId?: string | null;
};

export type ModelPerformanceConditionInput = {
  when?: ModelStringInput | null;
  and?: Array<ModelPerformanceConditionInput | null> | null;
  or?: Array<ModelPerformanceConditionInput | null> | null;
  not?: ModelPerformanceConditionInput | null;
};

export type UpdatePerformanceInput = {
  id: string;
  when?: string | null;
  performanceVenueId?: string | null;
  performanceArtistId?: string | null;
};

export type DeletePerformanceInput = {
  id?: string | null;
};

export type CreateUserInput = {
  username: string;
  email: string;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type UpdateUserInput = {
  username?: string | null;
  email?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type ModelArtistFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  image?: ModelStringInput | null;
  and?: Array<ModelArtistFilterInput | null> | null;
  or?: Array<ModelArtistFilterInput | null> | null;
  not?: ModelArtistFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPerformanceFilterInput = {
  id?: ModelIDInput | null;
  when?: ModelStringInput | null;
  and?: Array<ModelPerformanceFilterInput | null> | null;
  or?: Array<ModelPerformanceFilterInput | null> | null;
  not?: ModelPerformanceFilterInput | null;
};

export type ModelUserFilterInput = {
  username?: ModelStringInput | null;
  email?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelVenueFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  address?: ModelStringInput | null;
  and?: Array<ModelVenueFilterInput | null> | null;
  or?: Array<ModelVenueFilterInput | null> | null;
  not?: ModelVenueFilterInput | null;
};

export type CreateVenueMutation = {
  __typename: "Venue";
  id: string;
  name: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  address: string;
};

export type UpdateVenueMutation = {
  __typename: "Venue";
  id: string;
  name: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  address: string;
};

export type DeleteVenueMutation = {
  __typename: "Venue";
  id: string;
  name: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  address: string;
};

export type CreateArtistMutation = {
  __typename: "Artist";
  id: string;
  name: string;
  description: string;
  image: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  genres: Array<{
    __typename: "Genre";
    id: string;
    name: string;
  } | null> | null;
};

export type UpdateArtistMutation = {
  __typename: "Artist";
  id: string;
  name: string;
  description: string;
  image: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  genres: Array<{
    __typename: "Genre";
    id: string;
    name: string;
  } | null> | null;
};

export type DeleteArtistMutation = {
  __typename: "Artist";
  id: string;
  name: string;
  description: string;
  image: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  genres: Array<{
    __typename: "Genre";
    id: string;
    name: string;
  } | null> | null;
};

export type CreatePerformanceMutation = {
  __typename: "Performance";
  id: string;
  when: string;
  artist: {
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null;
};

export type UpdatePerformanceMutation = {
  __typename: "Performance";
  id: string;
  when: string;
  artist: {
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null;
};

export type DeletePerformanceMutation = {
  __typename: "Performance";
  id: string;
  when: string;
  artist: {
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null;
};

export type CreateUserMutation = {
  __typename: "User";
  username: string;
  email: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  username: string;
  email: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  username: string;
  email: string;
};

export type GetArtistQuery = {
  __typename: "Artist";
  id: string;
  name: string;
  description: string;
  image: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  genres: Array<{
    __typename: "Genre";
    id: string;
    name: string;
  } | null> | null;
};

export type ListArtistsQuery = {
  __typename: "ModelArtistConnection";
  items: Array<{
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPerformanceQuery = {
  __typename: "Performance";
  id: string;
  when: string;
  artist: {
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null;
};

export type ListPerformancesQuery = {
  __typename: "ModelPerformanceConnection";
  items: Array<{
    __typename: "Performance";
    id: string;
    when: string;
    artist: {
      __typename: "Artist";
      id: string;
      name: string;
      description: string;
      image: string;
      performances: {
        __typename: "ModelPerformanceConnection";
        nextToken: string | null;
      } | null;
      genres: Array<{
        __typename: "Genre";
        id: string;
        name: string;
      } | null> | null;
    } | null;
    venue: {
      __typename: "Venue";
      id: string;
      name: string;
      performances: {
        __typename: "ModelPerformanceConnection";
        nextToken: string | null;
      } | null;
      address: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  username: string;
  email: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    username: string;
    email: string;
  } | null> | null;
  nextToken: string | null;
};

export type ListVenuesQuery = {
  __typename: "ModelVenueConnection";
  items: Array<{
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetVenueQuery = {
  __typename: "Venue";
  id: string;
  name: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  address: string;
};

export type OnCreateVenueSubscription = {
  __typename: "Venue";
  id: string;
  name: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  address: string;
};

export type OnUpdateVenueSubscription = {
  __typename: "Venue";
  id: string;
  name: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  address: string;
};

export type OnDeleteVenueSubscription = {
  __typename: "Venue";
  id: string;
  name: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  address: string;
};

export type OnCreateArtistSubscription = {
  __typename: "Artist";
  id: string;
  name: string;
  description: string;
  image: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  genres: Array<{
    __typename: "Genre";
    id: string;
    name: string;
  } | null> | null;
};

export type OnUpdateArtistSubscription = {
  __typename: "Artist";
  id: string;
  name: string;
  description: string;
  image: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  genres: Array<{
    __typename: "Genre";
    id: string;
    name: string;
  } | null> | null;
};

export type OnDeleteArtistSubscription = {
  __typename: "Artist";
  id: string;
  name: string;
  description: string;
  image: string;
  performances: {
    __typename: "ModelPerformanceConnection";
    items: Array<{
      __typename: "Performance";
      id: string;
      when: string;
      artist: {
        __typename: "Artist";
        id: string;
        name: string;
        description: string;
        image: string;
      } | null;
      venue: {
        __typename: "Venue";
        id: string;
        name: string;
        address: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  genres: Array<{
    __typename: "Genre";
    id: string;
    name: string;
  } | null> | null;
};

export type OnCreatePerformanceSubscription = {
  __typename: "Performance";
  id: string;
  when: string;
  artist: {
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null;
};

export type OnUpdatePerformanceSubscription = {
  __typename: "Performance";
  id: string;
  when: string;
  artist: {
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null;
};

export type OnDeletePerformanceSubscription = {
  __typename: "Performance";
  id: string;
  when: string;
  artist: {
    __typename: "Artist";
    id: string;
    name: string;
    description: string;
    image: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    genres: Array<{
      __typename: "Genre";
      id: string;
      name: string;
    } | null> | null;
  } | null;
  venue: {
    __typename: "Venue";
    id: string;
    name: string;
    performances: {
      __typename: "ModelPerformanceConnection";
      items: Array<{
        __typename: "Performance";
        id: string;
        when: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    address: string;
  } | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  username: string;
  email: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  username: string;
  email: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  username: string;
  email: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateVenue(
    input: CreateVenueInput,
    condition?: ModelVenueConditionInput
  ): Promise<CreateVenueMutation> {
    const statement = `mutation CreateVenue($input: CreateVenueInput!, $condition: ModelVenueConditionInput) {
        createVenue(input: $input, condition: $condition) {
          __typename
          id
          name
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateVenueMutation>response.data.createVenue;
  }
  async UpdateVenue(
    input: UpdateVenueInput,
    condition?: ModelVenueConditionInput
  ): Promise<UpdateVenueMutation> {
    const statement = `mutation UpdateVenue($input: UpdateVenueInput!, $condition: ModelVenueConditionInput) {
        updateVenue(input: $input, condition: $condition) {
          __typename
          id
          name
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateVenueMutation>response.data.updateVenue;
  }
  async DeleteVenue(
    input: DeleteVenueInput,
    condition?: ModelVenueConditionInput
  ): Promise<DeleteVenueMutation> {
    const statement = `mutation DeleteVenue($input: DeleteVenueInput!, $condition: ModelVenueConditionInput) {
        deleteVenue(input: $input, condition: $condition) {
          __typename
          id
          name
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteVenueMutation>response.data.deleteVenue;
  }
  async CreateArtist(
    input: CreateArtistInput,
    condition?: ModelArtistConditionInput
  ): Promise<CreateArtistMutation> {
    const statement = `mutation CreateArtist($input: CreateArtistInput!, $condition: ModelArtistConditionInput) {
        createArtist(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          image
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          genres {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateArtistMutation>response.data.createArtist;
  }
  async UpdateArtist(
    input: UpdateArtistInput,
    condition?: ModelArtistConditionInput
  ): Promise<UpdateArtistMutation> {
    const statement = `mutation UpdateArtist($input: UpdateArtistInput!, $condition: ModelArtistConditionInput) {
        updateArtist(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          image
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          genres {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateArtistMutation>response.data.updateArtist;
  }
  async DeleteArtist(
    input: DeleteArtistInput,
    condition?: ModelArtistConditionInput
  ): Promise<DeleteArtistMutation> {
    const statement = `mutation DeleteArtist($input: DeleteArtistInput!, $condition: ModelArtistConditionInput) {
        deleteArtist(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          image
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          genres {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteArtistMutation>response.data.deleteArtist;
  }
  async CreatePerformance(
    input: CreatePerformanceInput,
    condition?: ModelPerformanceConditionInput
  ): Promise<CreatePerformanceMutation> {
    const statement = `mutation CreatePerformance($input: CreatePerformanceInput!, $condition: ModelPerformanceConditionInput) {
        createPerformance(input: $input, condition: $condition) {
          __typename
          id
          when
          artist {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          venue {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePerformanceMutation>response.data.createPerformance;
  }
  async UpdatePerformance(
    input: UpdatePerformanceInput,
    condition?: ModelPerformanceConditionInput
  ): Promise<UpdatePerformanceMutation> {
    const statement = `mutation UpdatePerformance($input: UpdatePerformanceInput!, $condition: ModelPerformanceConditionInput) {
        updatePerformance(input: $input, condition: $condition) {
          __typename
          id
          when
          artist {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          venue {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePerformanceMutation>response.data.updatePerformance;
  }
  async DeletePerformance(
    input: DeletePerformanceInput,
    condition?: ModelPerformanceConditionInput
  ): Promise<DeletePerformanceMutation> {
    const statement = `mutation DeletePerformance($input: DeletePerformanceInput!, $condition: ModelPerformanceConditionInput) {
        deletePerformance(input: $input, condition: $condition) {
          __typename
          id
          when
          artist {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          venue {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePerformanceMutation>response.data.deletePerformance;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          username
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          username
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          username
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetArtist(id: string): Promise<GetArtistQuery> {
    const statement = `query GetArtist($id: ID!) {
        getArtist(id: $id) {
          __typename
          id
          name
          description
          image
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          genres {
            __typename
            id
            name
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetArtistQuery>response.data.getArtist;
  }
  async ListArtists(
    filter?: ModelArtistFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListArtistsQuery> {
    const statement = `query ListArtists($filter: ModelArtistFilterInput, $limit: Int, $nextToken: String) {
        listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListArtistsQuery>response.data.listArtists;
  }
  async GetPerformance(id: string): Promise<GetPerformanceQuery> {
    const statement = `query GetPerformance($id: ID!) {
        getPerformance(id: $id) {
          __typename
          id
          when
          artist {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          venue {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPerformanceQuery>response.data.getPerformance;
  }
  async ListPerformances(
    filter?: ModelPerformanceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPerformancesQuery> {
    const statement = `query ListPerformances($filter: ModelPerformanceFilterInput, $limit: Int, $nextToken: String) {
        listPerformances(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            when
            artist {
              __typename
              id
              name
              description
              image
              performances {
                __typename
                nextToken
              }
              genres {
                __typename
                id
                name
              }
            }
            venue {
              __typename
              id
              name
              performances {
                __typename
                nextToken
              }
              address
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPerformancesQuery>response.data.listPerformances;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          username
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            username
            email
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async ListVenues(
    filter?: ModelVenueFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListVenuesQuery> {
    const statement = `query ListVenues($filter: ModelVenueFilterInput, $limit: Int, $nextToken: String) {
        listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVenuesQuery>response.data.listVenues;
  }
  async GetVenue(id: string): Promise<GetVenueQuery> {
    const statement = `query GetVenue($id: ID!) {
        getVenue(id: $id) {
          __typename
          id
          name
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          address
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetVenueQuery>response.data.getVenue;
  }
  OnCreateVenueListener: Observable<OnCreateVenueSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateVenue {
        onCreateVenue {
          __typename
          id
          name
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          address
        }
      }`
    )
  ) as Observable<OnCreateVenueSubscription>;

  OnUpdateVenueListener: Observable<OnUpdateVenueSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateVenue {
        onUpdateVenue {
          __typename
          id
          name
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          address
        }
      }`
    )
  ) as Observable<OnUpdateVenueSubscription>;

  OnDeleteVenueListener: Observable<OnDeleteVenueSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteVenue {
        onDeleteVenue {
          __typename
          id
          name
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          address
        }
      }`
    )
  ) as Observable<OnDeleteVenueSubscription>;

  OnCreateArtistListener: Observable<OnCreateArtistSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateArtist {
        onCreateArtist {
          __typename
          id
          name
          description
          image
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          genres {
            __typename
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnCreateArtistSubscription>;

  OnUpdateArtistListener: Observable<OnUpdateArtistSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateArtist {
        onUpdateArtist {
          __typename
          id
          name
          description
          image
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          genres {
            __typename
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnUpdateArtistSubscription>;

  OnDeleteArtistListener: Observable<OnDeleteArtistSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteArtist {
        onDeleteArtist {
          __typename
          id
          name
          description
          image
          performances {
            __typename
            items {
              __typename
              id
              when
              artist {
                __typename
                id
                name
                description
                image
              }
              venue {
                __typename
                id
                name
                address
              }
            }
            nextToken
          }
          genres {
            __typename
            id
            name
          }
        }
      }`
    )
  ) as Observable<OnDeleteArtistSubscription>;

  OnCreatePerformanceListener: Observable<
    OnCreatePerformanceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePerformance {
        onCreatePerformance {
          __typename
          id
          when
          artist {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          venue {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
        }
      }`
    )
  ) as Observable<OnCreatePerformanceSubscription>;

  OnUpdatePerformanceListener: Observable<
    OnUpdatePerformanceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePerformance {
        onUpdatePerformance {
          __typename
          id
          when
          artist {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          venue {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
        }
      }`
    )
  ) as Observable<OnUpdatePerformanceSubscription>;

  OnDeletePerformanceListener: Observable<
    OnDeletePerformanceSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePerformance {
        onDeletePerformance {
          __typename
          id
          when
          artist {
            __typename
            id
            name
            description
            image
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            genres {
              __typename
              id
              name
            }
          }
          venue {
            __typename
            id
            name
            performances {
              __typename
              items {
                __typename
                id
                when
              }
              nextToken
            }
            address
          }
        }
      }`
    )
  ) as Observable<OnDeletePerformanceSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          username
          email
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          username
          email
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          username
          email
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;
}
